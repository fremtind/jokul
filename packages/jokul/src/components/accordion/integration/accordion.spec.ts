import { test } from "utils/playwright/base.mjs";
import { TestHelper } from "utils/playwright/TestHelper.mjs";
let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "accordion",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders in default state", async () => {
    await helper.open();

    await helper.snapshots({
        focusElement: "summary",
    });
});

test("opens accordion", async () => {
    await helper.open();

    await helper.clickElement('[data-testid="jkl-accordion-item"]');

    await helper.snapshots({
        before() {
            return new Promise((resolve) => setTimeout(resolve, 600));
        },
    });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();

    await helper.clickElement('[data-testid="jkl-accordion-item"]');

    await axe();
});
