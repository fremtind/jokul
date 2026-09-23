import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { expect, test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "tag",
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

test("does not stretch to the width of a column flex container", async () => {
    await helper.open();

    await expect(helper.page.getByTestId("tag-column-flex-item")).toBeVisible();
    await helper.page.evaluate(() => document.fonts.ready);

    const widths = await helper.page
        .getByTestId("tag-column-flex")
        .evaluate((container) => {
            const tag = container.querySelector(
                '[data-testid="tag-column-flex-item"]',
            );

            if (!(tag instanceof HTMLElement)) {
                throw new Error("Could not find Tag in flex container");
            }

            return {
                container: container.getBoundingClientRect().width,
                tag: tag.getBoundingClientRect().width,
            };
        });

    expect(widths.container).toBe(320);
    expect(widths.tag).toBeGreaterThan(0);
    expect(widths.tag).toBeLessThan(widths.container);
});

test("axe", async ({ axe }) => {
    await helper.open();

    await axe();
});
