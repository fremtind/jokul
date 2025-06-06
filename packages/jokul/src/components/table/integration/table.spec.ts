import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "table",
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

    // TODO Fix in https://github.com/fremtind/jokul/issues/4389
    await axe({ disableRules: ["scrollable-region-focusable"] });
});
