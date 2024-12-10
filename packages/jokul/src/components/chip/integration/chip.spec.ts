import { test } from "@playwright/test";
import { TestHelper } from "../../../../../../utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "chip",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly as input", async () => {
    await helper.open();

    await helper.snapshots({ focusElement: ".jkl-chip" });
});

test("renders correctly as filter", async () => {
    await helper.open();

    await helper.checkProp("choice-prop-filter");

    await helper.snapshots({ focusElement: ".jkl-chip" });
});
