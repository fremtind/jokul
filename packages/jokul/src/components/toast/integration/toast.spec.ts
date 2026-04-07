import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "toast",
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

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();
});

test("uses the Jøkul focus outline on the dismiss button", async () => {
    await helper.open();

    await helper.page.getByRole("button", { name: "Vis toast i kontekst" }).click();
    await helper.page.waitForSelector(".jkl-toast__dismiss-button");

    await helper.focus(".jkl-toast__dismiss-button");
    await helper.expectFocusOutline(".jkl-toast__dismiss-button");
});
