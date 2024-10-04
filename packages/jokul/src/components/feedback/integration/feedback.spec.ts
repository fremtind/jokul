import { test } from "@playwright/test";
import { TestHelper } from "../../../../../../utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, wokerInfo) => {
    helper = new TestHelper({
        page,
        package: "feedback",
        projectName: wokerInfo.project.name,
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
