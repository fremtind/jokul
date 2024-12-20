import { test } from "@playwright/test";
import { TestHelper } from "../../../../../../utils/playwright/TestHelper.mjs";

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
