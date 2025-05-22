import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "tooltip",
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
        focusElement: ".jkl-tooltip-question-button",
        before: () =>
            helper
                .clickElement('[data-testid="jkl-tooltip-question-button"]')
                .then(() => new Promise((resolve) => setTimeout(resolve, 200))),
    });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await helper
        .clickElement('[data-testid="jkl-tooltip-question-button"]')
        .then(() => new Promise((resolve) => setTimeout(resolve, 200)));

    await axe({
        disableRules: [
            // The plugin has issues with floating-ui that is out of our control
            "aria-hidden-focus",
            // The way we calculate the aria-label does not work in Playwrights rendering environment
            "button-name",
        ],
    });
});
