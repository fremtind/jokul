import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "select",
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
        before: () => helper.clickElement('[data-testid="jkl-select__button"]'),
    });
});

test("axe", async ({ axe }) => {
    await helper.open();

    helper.clickElement('[data-testid="jkl-select__button"]');

    await axe();
});
