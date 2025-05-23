import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "list",
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

test("renders coverage correctly", async () => {
    await helper.open();

    await helper.checkProp("choice-prop-coverage");

    await helper.snapshots();
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();

    await helper.checkProp("choice-prop-coverage");

    await axe();
});
