import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "menu",
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
        focusElement: ".jkl-button",
        before: () => helper.clickElement('[data-testid="open-menu"]'),
    });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await helper.clickElement('[data-testid="open-menu"]');

    // The plugin has issues with floating-ui that is out of our control
    await axe({ disableRules: ["aria-hidden-focus"] });
});
