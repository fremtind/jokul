import { test } from "utils/playwright/base.mjs";
import { TestHelper } from "utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "pagination",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots({ focusElement: "[aria-current='false']" });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();
});
