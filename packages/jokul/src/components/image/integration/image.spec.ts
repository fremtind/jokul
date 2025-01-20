import { test } from "utils/playwright/base.mjs";
import { TestHelper } from "utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "image",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.clickElement('[data-testid="load-image-button"]');

    await helper.snapshots({
        before() {
            return new Promise((resolve) => setTimeout(resolve, 200));
        },
    });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await helper.clickElement('[data-testid="load-image-button"]');

    await new Promise((resolve) => setTimeout(resolve, 200));

    await axe();
});
