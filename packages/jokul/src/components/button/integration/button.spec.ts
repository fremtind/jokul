import { test } from "utils/playwright/base.mjs";
import { TestHelper } from "utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "button",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots({ focusElement: ".jkl-button" });
});

test("renders correctly with icon", async () => {
    await helper.open();

    await helper.checkProp("bool-prop-icon");

    await helper.snapshots();
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();

    await helper.checkProp("bool-prop-icon");

    await axe();
});
