import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "checkbox",
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

test("renders correctly with error message", async () => {
    await helper.open();

    await helper.checkProp("bool-prop-med-feil");

    await helper.snapshots();
});

test("uses the Jøkul focus outline when focused", async () => {
    await helper.open();

    await helper.focus(".jkl-checkbox__input");
    await helper.expectFocusOutline(".jkl-checkbox__label");
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();

    await helper.checkProp("bool-prop-med-feil");

    await axe();
});
