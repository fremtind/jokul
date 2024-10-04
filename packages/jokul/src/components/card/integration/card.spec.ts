import { test } from "@playwright/test";
import { TestHelper } from "../../../../../../utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, wokerInfo) => {
    helper = new TestHelper({
        page,
        package: "card",
        projectName: wokerInfo.project.name,
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
