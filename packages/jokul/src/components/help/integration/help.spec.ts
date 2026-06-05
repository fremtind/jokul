import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { expect, test } from "utils/playwright/base.mjs";

let helper: TestHelper;

async function openExample() {
    await helper.open();
    await expect(helper.page.getByTestId("jkl-help-trigger")).toBeVisible();
}

async function openHelp() {
    await helper.page
        .getByTestId("jkl-help-trigger")
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

    const popover = helper.page.locator(".jkl-help-popover");

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
