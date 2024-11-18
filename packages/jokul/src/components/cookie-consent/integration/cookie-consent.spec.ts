import { test } from "@playwright/test";
import { TestHelper } from "../../../../../../utils/playwright/TestHelper.mjs";

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
        before: () =>
            helper.clickElement('[data-testid="trigger-cookie-consent"]'),
        after: () =>
            helper.clickElement('[data-testid="jkl-cookie-consent-godta"]'),
    });
});
