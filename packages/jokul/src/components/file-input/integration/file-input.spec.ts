import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "file-input",
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

test("renders correctly in small mode", async () => {
    await helper.open();

    await helper.checkProp("choice-prop-small");

    await helper.snapshots();
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();
});
