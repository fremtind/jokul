import { test } from "utils/playwright/base.mjs";
import { TestHelper } from "utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "modal",
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
        before: () => helper.clickElement('[data-testid="open-modal"]'),
        after: () => helper.clickElement('[data-testid="confirm-modal"]'),
        selector: ".jkl-modal",
    });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await helper.clickElement('[data-testid="open-modal"]');

    await axe();
});
