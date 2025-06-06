import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "text-input",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots({ focusElement: ".jkl-text-input__input" });
});

test("renders allthethings correctly", async () => {
    await helper.open();

    await helper.checkProp("bool-prop-med-feil");
    await helper.checkProp("bool-prop-med-tooltip");
    await helper.checkProp("bool-prop-med-handling");
    await helper.checkProp("bool-prop-med-benevnelse");

    await helper.snapshots({ focusElement: ".jkl-text-input-action-button" });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();

    await helper.checkProp("bool-prop-med-feil");
    await helper.checkProp("bool-prop-med-tooltip");
    await helper.checkProp("bool-prop-med-handling");
    await helper.checkProp("bool-prop-med-benevnelse");

    await axe();
});
