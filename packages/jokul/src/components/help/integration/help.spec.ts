import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { expect, test } from "utils/playwright/base.mjs";

let helper: TestHelper;

async function openExample() {
    await helper.open();
    await expect(
        helper.page.getByTestId("jkl-help-trigger").first(),
    ).toBeVisible();
}

async function openHelp() {
    await helper.page
        .getByTestId("jkl-help-trigger")
        .first()
        .click({ noWaitAfter: true });
}

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "help",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    await helper?.close();
});

test("renders correctly and is accessible", async ({ axe }) => {
    await openExample();

    const popover = helper.page.locator(".jkl-help-popover").first();

    await expect(popover).not.toBeVisible();
    await openHelp();
    await expect(popover).toBeVisible();

    await axe();

    await helper.pressKey("Escape");
    await expect(popover).not.toBeVisible();

    await helper.snapshots({
        focusElement: ".jkl-help-trigger",
        before: async () => {
            await openHelp();
        },
        after: async () => {
            await helper.pressKey("Escape");
        },
    });
});

test("does not trigger other Help popovers", async () => {
    await helper.open();

    const flereHelpSection = helper.page
        .locator("[data-testid='component-example']")
        .nth(1);

    const trigger1 = flereHelpSection.getByTestId("jkl-help-trigger").nth(0);
    const trigger2 = flereHelpSection.getByTestId("jkl-help-trigger").nth(1);
    const popover1 = flereHelpSection.locator(".jkl-help-popover").nth(0);
    const popover2 = flereHelpSection.locator(".jkl-help-popover").nth(1);

    await expect(trigger1).toBeVisible();
    await expect(trigger2).toBeVisible();

    // Åpne første popover – kun den første skal vises
    await trigger1.click({ noWaitAfter: true });
    await expect(popover1).toBeVisible();
    await expect(popover2).not.toBeVisible();

    await helper.pressKey("Escape");
    await expect(popover1).not.toBeVisible();

    // Åpne andre popover – kun den andre skal vises
    await trigger2.click({ noWaitAfter: true });
    await expect(popover2).toBeVisible();
    await expect(popover1).not.toBeVisible();

    await helper.pressKey("Escape");
    await expect(popover2).not.toBeVisible();
});
