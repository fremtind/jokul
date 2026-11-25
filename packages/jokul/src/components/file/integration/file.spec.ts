import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "file",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly as list", async () => {
    await helper.open();

    await helper.snapshots({ focusElement: ".jkl-file__button" });
});

test("renders correctly as card", async () => {
    await helper.open();

    await helper.checkProp("choice-prop-card");

    await helper.snapshots({ focusElement: ".jkl-file__button" });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();
    await helper.checkProp("choice-prop-card");

    await axe();
});
