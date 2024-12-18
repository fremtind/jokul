import { test } from "utils/playwright/base.mjs";
import { TestHelper } from "utils/playwright/TestHelper.mjs";

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
