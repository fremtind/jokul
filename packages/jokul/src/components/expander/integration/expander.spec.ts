import { test } from "@playwright/test";
import { TestHelper } from "../../../../../../utils/playwright/TestHelper.mjs";

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
