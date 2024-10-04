import { test } from "@playwright/test";
import { TestHelper } from "../../../../../../utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, wokerInfo) => {
    helper = new TestHelper({
        page,
        package: "input-panel",
        projectName: wokerInfo.project.name,
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

    await helper.snapshots();
});
