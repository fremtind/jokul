import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { expect, test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "combobox",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots({ focusElement: ".jkl-combobox__search-input" });
});

test("renders correctly with help text", async () => {
    await helper.open();

    await helper.checkProp("bool-prop-med-hjelpetekst");

    await helper.snapshots();
});

test("keeps the toggle button inside narrow widths", async () => {
    await helper.open();

    const wrapper = helper.page.locator(".jkl-combobox__wrapper").first();
    await wrapper.evaluate((element) => {
        if (element instanceof HTMLElement) {
            element.style.width = "20ch";
        }
    });

    const wrapperBox = await wrapper.boundingBox();
    const buttonBox = await helper.page
        .getByTestId("jkl-combobox__button")
        .first()
        .boundingBox();

    expect(wrapperBox).not.toBeNull();
    expect(buttonBox).not.toBeNull();

    if (!wrapperBox || !buttonBox) {
        return;
    }

    expect(buttonBox.x).toBeGreaterThanOrEqual(wrapperBox.x - 1);
    expect(buttonBox.x + buttonBox.width).toBeLessThanOrEqual(
        wrapperBox.x + wrapperBox.width + 1,
    );
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();
});
