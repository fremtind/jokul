import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "expander",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots({ focusElement: ".jkl-expander" });
});

test("opens correctly", async () => {
    await helper.open();

    await helper.clickElement("summary");
    await helper.clickElement(
        ".jkl-expandable__wrapper:nth-of-type(3) summary",
    );

    await helper.snapshots();
});

test("renders single stroke panel correctly", async () => {
    await helper.open();

    await helper.snapshots({
        before: async () => {
            await helper.page.waitForSelector(
                '[data-testid="single-stroke-trigger"]',
            );
            await helper.clickElement('[data-testid="single-stroke-trigger"]');
            await helper.page.waitForFunction(() => {
                const content = document.querySelector(
                    '[data-testid="single-stroke-content"]',
                );

                return content?.getAttribute("data-expanded") === "true";
            });
        },
        after: async () => {
            await helper.clickElement('[data-testid="single-stroke-trigger"]');
            await helper.page.waitForFunction(() => {
                const content = document.querySelector(
                    '[data-testid="single-stroke-content"]',
                );

                return content?.getAttribute("data-expanded") === "false";
            });
        },
        selector: '[data-testid="single-stroke-example"]',
    });
});

test("axe", async ({ axe }) => {
    await helper.open();

    // The plugin claims aria-expanded can't be used with the checkbox role. We disagree.
    await axe({ disableRules: ["aria-allowed-attr"] });

    await helper.clickElement("summary");
    await helper.clickElement(
        ".jkl-expandable__wrapper:nth-of-type(3) summary",
    );

    // The plugin claims aria-expanded can't be used with the checkbox role. We disagree.
    await axe({ disableRules: ["aria-allowed-attr"] });
});
