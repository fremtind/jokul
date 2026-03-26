import type { Locator } from "@playwright/test";
import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { expect, test } from "utils/playwright/base.mjs";

let helper: TestHelper;
const alignmentTolerance = 3;

const getBoundingBox = async (locator: Locator) => {
    const box = await locator.boundingBox();

    if (!box) {
        throw new Error("Could not read element bounding box");
    }

    return box;
};

const clickHeaderAt = async (header: Locator, position: number) => {
    const box = await getBoundingBox(header);

    await header.click({
        position: {
            x: Math.min(Math.max(box.width * position, 8), box.width - 8),
            y: box.height / 2,
        },
    });
};

const expectInputAlignedWithLabel = async (panel: Locator) => {
    const alignment = await panel.evaluate((element) => {
        const input = element.querySelector<HTMLInputElement>(
            ".jkl-radio-button__input",
        );
        const label = element.querySelector<HTMLLabelElement>(
            ".jkl-radio-button__label",
        );

        if (!input || !label) {
            throw new Error("Could not find radio input and label");
        }

        const inputRect = input.getBoundingClientRect();
        const labelRect = label.getBoundingClientRect();

        return {
            inputX: inputRect.x,
            inputY: inputRect.y,
            inputWidth: inputRect.width,
            inputHeight: inputRect.height,
            labelX: labelRect.x,
            labelY: labelRect.y,
            labelHeight: labelRect.height,
        };
    });

    expect(Math.abs(alignment.inputX - alignment.labelX)).toBeLessThan(
        alignmentTolerance,
    );
    expect(Math.abs(alignment.inputY - alignment.labelY)).toBeLessThan(
        alignmentTolerance,
    );
    expect(Math.abs(alignment.inputWidth - alignment.labelHeight)).toBeLessThan(
        alignmentTolerance,
    );
    expect(
        Math.abs(alignment.inputHeight - alignment.labelHeight),
    ).toBeLessThan(alignmentTolerance);
};

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "radio-panel",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots();
});

test("axe", async ({ axe }) => {
    await helper.open();

    // The plugin claims aria-expanded can't be used with the checkbox role. We disagree.
    await axe({ disableRules: ["aria-allowed-attr"] });
});

test("header is clickable across the full width and the hidden input matches the icon position", async () => {
    await helper.open();
    await helper.page.evaluate(() => document.fonts.ready);

    const springPanel = helper.page
        .locator(".jkl-radio-panel")
        .filter({ hasText: "Vår" })
        .first();
    const summerPanel = helper.page
        .locator(".jkl-radio-panel")
        .filter({ hasText: "Sommer" })
        .first();
    const springHeader = springPanel.locator(".jkl-input-panel__header");
    const summerHeader = summerPanel.locator(".jkl-input-panel__header");
    const springInput = springPanel.locator(".jkl-radio-button__input");
    const summerInput = summerPanel.locator(".jkl-radio-button__input");

    await expectInputAlignedWithLabel(springPanel);

    await expect(springInput).not.toBeChecked();
    await expect(summerInput).not.toBeChecked();

    await clickHeaderAt(springHeader, 0.9);
    await expect(springInput).toBeChecked();
    await expect(summerInput).not.toBeChecked();

    await clickHeaderAt(summerHeader, 0.5);
    await expect(summerInput).toBeChecked();
    await expect(springInput).not.toBeChecked();

    await clickHeaderAt(springHeader, 0.1);
    await expect(springInput).toBeChecked();
    await expect(summerInput).not.toBeChecked();
});
