import { test } from "@playwright/test";
import { TestHelper } from "../../../../../../utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "popover",
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
        before: () =>
            helper
                .clickElement('[aria-haspopup="menu"]')
                .then(() => new Promise((resolve) => setTimeout(resolve, 200))),
        after: () => helper.pressKey("Escape"),
        selector: "html",
    });
});
