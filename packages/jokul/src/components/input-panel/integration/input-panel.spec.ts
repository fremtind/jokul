import { test } from "utils/playwright/base.mjs";
import { TestHelper } from "utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "input-panel",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("RadioPanel renders correctly", async () => {
    await helper.open();

    await helper.clickElement('[data-testid="radio-panel"]');

    await helper.snapshots();
});

test("CheckPanel renders correctly", async () => {
    await helper.open();

    await helper.clickElement('[data-testid="check-panel"]');

    await helper.snapshots({ focusElement: "[aria-expanded='false']" });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await helper.clickElement('[data-testid="radio-panel"]');

    // The plugin claims aria-expanded can't be used with the radio role. We disagree.
    await axe({ disableRules: ["aria-allowed-attr"] });

    await helper.clickElement('[data-testid="check-panel"]');

    // The plugin claims aria-expanded can't be used with the checkbox role. We disagree.
    await axe({ disableRules: ["aria-allowed-attr"] });
});
