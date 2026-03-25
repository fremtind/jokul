import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "cookie-consent",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots({
        selector: ".jkl-modal",
        focusElement: '[data-testid="jkl-cookie-consent-godta"]',
        before: () =>
            helper.clickElement('[data-testid="trigger-cookie-consent"]'),
        after: () =>
            helper.clickElement('[data-testid="jkl-cookie-consent-godta"]'),
    });
});

test("uses the Jøkul focus outline when the accept button is focused", async () => {
    await helper.open();

    await helper.clickElement('[data-testid="trigger-cookie-consent"]');
    await helper.page.waitForSelector('[data-testid="jkl-cookie-consent-godta"]');

    await helper.focus('[data-testid="jkl-cookie-consent-godta"]');
    await helper.expectFocusOutline('[data-testid="jkl-cookie-consent-godta"]');
});
