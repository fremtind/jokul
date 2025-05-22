import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "text-area",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots({ focusElement: ".jkl-text-area__text-area" });
});

test("renders allthethings correctly", async () => {
    await helper.open();

    await helper.checkProp("bool-prop-starter-åpen");
    await helper.checkProp("bool-prop-med-teller");
    await helper.checkProp("bool-prop-med-hjelpetekst");
    await helper.checkProp("bool-prop-med-tooltip");

    await helper.type("textarea", "jokul");

    await helper.snapshots();
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();

    await helper.checkProp("bool-prop-starter-åpen");
    await helper.checkProp("bool-prop-med-teller");
    await helper.checkProp("bool-prop-med-hjelpetekst");
    await helper.checkProp("bool-prop-med-tooltip");

    await axe();
});
