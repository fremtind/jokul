import { test } from "@playwright/test";
import { TestHelper } from "../../../../../../utils/playwright/TestHelper.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "text-input",
        projectName: workerInfo.project.name,
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

test("renders allthethings correctly", async () => {
    await helper.open();

    await helper.checkProp("bool-prop-med-feil");
    await helper.checkProp("bool-prop-med-tooltip");
    await helper.checkProp("bool-prop-med-handling");
    await helper.checkProp("bool-prop-med-benevnelse");

    await helper.snapshots();
});
