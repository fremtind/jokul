import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "radio-button",
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

test("uses the Jøkul focus outline when focused", async () => {
    await helper.open();

    await helper.focus(".jkl-radio-button__input");
    await helper.expectFocusOutline(".jkl-radio-button__label");
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();
});
