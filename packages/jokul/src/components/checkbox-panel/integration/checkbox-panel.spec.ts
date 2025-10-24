import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "checkbox-panel",
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

test("axe", async ({ axe }) => {
    await helper.open();

    // The plugin claims aria-expanded can't be used with the radio role. We disagree.
    await axe({ disableRules: ["aria-allowed-attr"] });
});
