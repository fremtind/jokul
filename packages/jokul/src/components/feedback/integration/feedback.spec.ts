import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "feedback",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.clickElement('[data-testid="jkl-radio-button__label-tag"]');

    await helper.snapshots();
});

test("uses the Jøkul focus outline when a radio feedback option is focused", async () => {
    await helper.open();

    await helper.focus(".jkl-radio-button__input");
    await helper.expectFocusOutline(".jkl-radio-button__label");
});

test("uses the Jøkul focus outline when a smiley feedback option is focused", async () => {
    await helper.open();

    await helper.page.getByLabel("Forhåndsvalg").selectOption("Smileys");

    await helper.focus(".jkl-feedback-smileys input");
    await helper.expectFocusOutline(".jkl-feedback-smiley-option");
});
