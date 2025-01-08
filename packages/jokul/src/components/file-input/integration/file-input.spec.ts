import { test } from "utils/playwright/base.mjs";
import { TestHelper } from "utils/playwright/TestHelper.mjs";

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

    await helper.snapshots({ focusElement: ".jkl-file__delete" });
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
