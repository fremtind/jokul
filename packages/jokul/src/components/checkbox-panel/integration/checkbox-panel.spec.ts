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
            ".jkl-checkbox__input",
        );
        const label = element.querySelector<HTMLLabelElement>(
            ".jkl-checkbox__label",
        );

        if (!input || !label) {
            throw new Error("Could not find checkbox input and label");
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
        package: "checkbox-panel",
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

    // The plugin claims aria-expanded can't be used with the radio role. We disagree.
    await axe({ disableRules: ["aria-allowed-attr"] });
});

test("header is clickable across the full width and the hidden input matches the icon position", async () => {
    await helper.open();
    await helper.page.evaluate(() => document.fonts.ready);

    const panel = helper.page
        .locator(".jkl-checkbox-panel")
        .filter({
            has: helper.page.locator('.jkl-checkbox__input[name="minikasko"]'),
        })
        .first();
    const header = panel.locator(".jkl-input-panel__header");
    const input = panel.locator(".jkl-checkbox__input");

    await expectInputAlignedWithLabel(panel);

    await expect(input).not.toBeChecked();

    await clickHeaderAt(header, 0.9);
    await expect(input).toBeChecked();

    await clickHeaderAt(header, 0.5);
    await expect(input).not.toBeChecked();

    await clickHeaderAt(header, 0.1);
    await expect(input).toBeChecked();
});
