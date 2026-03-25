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

    await helper.snapshots({
        focusElement: {
            target: "#file-input-example",
            outline: "#file-input-example__add-btn",
        },
    });
});

test("renders correctly in small mode", async () => {
    await helper.open();

    await helper.checkProp("choice-prop-small");

    await helper.snapshots({
        focusElement: {
            target: "#file-input-example",
            outline: "#file-input-example__add-btn",
        },
    });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();
});
