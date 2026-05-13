import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { navigate } from "visual-regression/utils.js";

const TRIGGER = '[data-testid="open-cookie-consent"]';
const ACCEPT_BTN = '[data-testid="jkl-cookie-consent-godta"]';
const DENY_BTN = '[data-testid="jkl-cookie-consent-nekt"]';

// story uten play-funksjon – ikke-blokkerende modal (role="dialog")
const STORY_ID_DEFAULT = "visuell-regresjonstesting-cookieconsent--interaksjon";
// story med blocking=true – blokkerende modal (role="alertdialog")
const STORY_ID_BLOCKING =
    "visuell-regresjonstesting-cookieconsent--interaksjon-blokkerende";

test.beforeEach(async ({ page }) => {
    await navigate(page, STORY_ID_DEFAULT);
});

test("modalen åpnes og lukkes med godta-knappen", async ({ page }) => {
    const dialog = page.getByRole("dialog").or(page.getByRole("alertdialog"));

    await expect(dialog).not.toBeVisible();

    await page.locator(TRIGGER).click();
    await expect(dialog).toBeVisible();

    await page.locator(ACCEPT_BTN).click();
    await expect(dialog).not.toBeVisible();
});

test("modalen lukkes med nei takk-knappen", async ({ page }) => {
    const dialog = page.getByRole("dialog").or(page.getByRole("alertdialog"));

    await page.locator(TRIGGER).click();
    await expect(dialog).toBeVisible();

    await page.locator(DENY_BTN).click();
    await expect(dialog).not.toBeVisible();
});

test("ikke-blokkerende modal lukkes ved klikk utenfor", async ({ page }) => {
    const dialog = page.getByRole("dialog").or(page.getByRole("alertdialog"));

    await page.locator(TRIGGER).click();
    await expect(dialog).toBeVisible();

    await page.mouse.click(10, 10);
    await expect(dialog).not.toBeVisible();
});

test("blokkerende modal lukkes ikke ved klikk utenfor", async ({ page }) => {
    await navigate(page, STORY_ID_BLOCKING);
    const dialog = page.getByRole("dialog").or(page.getByRole("alertdialog"));

    await page.locator(TRIGGER).click();
    await expect(dialog).toBeVisible();

    await page.mouse.click(10, 10);
    await expect(dialog).toBeVisible();
});

test("axe – siden uten åpen modal", async ({ page }) => {
    const results = await new AxeBuilder({ page })
        .include("#storybook-root")
        .analyze();
    expect(results.violations).toEqual([]);
});

test("axe – med åpen modal", async ({ page }) => {
    await page.locator(TRIGGER).click();
    await page
        .getByRole("dialog")
        .or(page.getByRole("alertdialog"))
        .waitFor({ state: "visible" });

    // Modalen rendres via portal i document.body – skann hele body
    // men ekskluder Storybook-rammeverkets egne elementer
    const results = await new AxeBuilder({ page })
        .include("body")
        .exclude("#storybook-root")
        .analyze();
    expect(results.violations).toEqual([]);
});
