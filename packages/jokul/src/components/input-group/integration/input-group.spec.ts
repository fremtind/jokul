import { test } from "utils/playwright/base.mjs";
import { TestHelper } from "utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "input-group",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.checkProp("bool-prop-med-tooltip");

    await helper.snapshots({ focusElement: ".jkl-text-input__input" });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await helper.checkProp("bool-prop-med-tooltip");

    await axe();
});
