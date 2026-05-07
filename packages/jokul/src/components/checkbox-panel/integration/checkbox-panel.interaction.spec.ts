import AxeBuilder from "@axe-core/playwright";
import type { Locator, Page } from "@playwright/test";
import { expect, test } from "@playwright/test";
import { navigate } from "visual-regression/utils.js";

// Story-ID generert av Storybook fra title "Visuell regresjonstesting/CheckboxPanel"
// og export-navn "LysDefault"
const INTERACTION_STORY_ID =
    "visuell-regresjonstesting-checkboxpanel--lys-default";

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

const openStory = async (page: Page) => {
    await navigate(page, INTERACTION_STORY_ID);
    await page.evaluate(() => document.fonts.ready);
};

test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await openStory(page);
});

test("header er klikkbar over hele bredden", async ({ page }) => {
    // Kasko-panelet er forhåndsavkrysset – finn Minikasko-panelet som ikke er det
    const minikaskoPanel = page
        .locator(".jkl-checkbox-panel")
        .filter({ hasText: "Minikasko" })
        .first();
    const minikaskoHeader = minikaskoPanel.locator(".jkl-input-panel__header");
    const minikaskoInput = minikaskoPanel.locator(".jkl-checkbox__input");

    await expect(minikaskoInput).not.toBeChecked();

    await clickHeaderAt(minikaskoHeader, 0.9);
    await expect(minikaskoInput).toBeChecked();

    await clickHeaderAt(minikaskoHeader, 0.5);
    await expect(minikaskoInput).not.toBeChecked();

    await clickHeaderAt(minikaskoHeader, 0.1);
    await expect(minikaskoInput).toBeChecked();
});

test("den skjulte inputen er posisjonert i tråd med ikonets plassering", async ({
    page,
}) => {
    const panel = page
        .locator(".jkl-checkbox-panel")
        .filter({ hasText: "Minikasko" })
        .first();

    await expectInputAlignedWithLabel(panel);
});

test("axe", async ({ page }) => {
    const results = await new AxeBuilder({ page })
        .include("#storybook-root")
        .analyze();
    expect(results.violations).toEqual([]);
});
