import { TestHelper } from "utils/playwright/TestHelper.mjs";
import { test } from "utils/playwright/base.mjs";

let helper: TestHelper;

test.beforeEach(async ({ page }, workerInfo) => {
    helper = new TestHelper({
        page,
        package: "modal",
        projectName: workerInfo.project.name,
    });
    await helper.init();
});

test.afterEach(async () => {
    helper.close();
});

test("renders correctly", async () => {
    await helper.open();

    await helper.snapshots({
        before: async () => {
            await helper.page.waitForSelector(
                '[data-testid="open-modal"]:not([disabled])',
            );
            await helper.clickElement('[data-testid="open-modal"]');
            await helper.page.waitForSelector(
                '.jkl-modal-container:not([aria-hidden="true"])',
            );
            await helper.page.waitForFunction(() => {
                const container = document.querySelector(
                    '.jkl-modal-container:not([aria-hidden="true"])',
                );
                const modal = container?.querySelector(".jkl-modal");
                const overlay = container?.querySelector(".jkl-modal-overlay");
                if (!container || !modal) {
                    return false;
                }
                const styles = getComputedStyle(modal);
                const overlayStyles = overlay
                    ? getComputedStyle(overlay)
                    : null;
                return (
                    container.getAttribute("aria-hidden") !== "true" &&
                    Number.parseFloat(styles.opacity) >= 0.99 &&
                    Number.parseFloat(overlayStyles?.opacity || "0") >= 0.99
                );
            });
        },
        after: () => helper.clickElement('[data-testid="confirm-modal"]'),
        selector:
            '.jkl-modal-container--placement-center:not([aria-hidden="true"]) .jkl-modal',
        selectorPadding: 0,
    });
});

test("renders bottom sheet", async () => {
    await helper.open();

    await helper.snapshots({
        before: async () => {
            await helper.page.waitForSelector(
                '[data-testid="open-modal-bottom"]:not([disabled])',
            );
            await helper.clickElement('[data-testid="open-modal-bottom"]');
            await helper.page.waitForSelector(
                '.jkl-modal-container--placement-bottom:not([aria-hidden="true"])',
            );
            await helper.page.waitForFunction(() => {
                const container = document.querySelector(
                    '.jkl-modal-container--placement-bottom:not([aria-hidden="true"])',
                );
                const modal = container?.querySelector(".jkl-modal");
                const overlay = container?.querySelector(".jkl-modal-overlay");
                if (!container || !modal) {
                    return false;
                }
                const styles = getComputedStyle(modal);
                const overlayStyles = overlay
                    ? getComputedStyle(overlay)
                    : null;
                return (
                    container.getAttribute("aria-hidden") !== "true" &&
                    Number.parseFloat(styles.opacity) >= 0.99 &&
                    Number.parseFloat(overlayStyles?.opacity || "0") >= 0.99
                );
            });
        },
        after: () =>
            helper.clickElement('[data-testid="confirm-modal-bottom"]'),
        selector:
            '.jkl-modal-container--placement-bottom:not([aria-hidden="true"]) .jkl-modal',
        selectorPadding: 0,
    });
});

test("renders side panel", async () => {
    await helper.open();

    await helper.snapshots({
        before: async () => {
            await helper.page.waitForSelector(
                '[data-testid="open-modal-side"]:not([disabled])',
            );
            await helper.clickElement('[data-testid="open-modal-side"]');
            await helper.page.waitForSelector(
                '.jkl-modal-container--placement-right:not([aria-hidden="true"])',
            );
            await helper.page.waitForFunction(() => {
                const container = document.querySelector(
                    '.jkl-modal-container--placement-right:not([aria-hidden="true"])',
                );
                const modal = container?.querySelector(".jkl-modal");
                const overlay = container?.querySelector(".jkl-modal-overlay");
                if (!container || !modal) {
                    return false;
                }
                const styles = getComputedStyle(modal);
                const overlayStyles = overlay
                    ? getComputedStyle(overlay)
                    : null;
                return (
                    container.getAttribute("aria-hidden") !== "true" &&
                    Number.parseFloat(styles.opacity) >= 0.99 &&
                    Number.parseFloat(overlayStyles?.opacity || "0") >= 0.99
                );
            });
        },
        after: () => helper.clickElement('[data-testid="confirm-modal-side"]'),
        selector:
            '.jkl-modal-container--placement-right:not([aria-hidden="true"]) .jkl-modal',
        selectorPadding: 0,
    });
});

test("axe", async ({ axe }) => {
    await helper.open();

    await helper.clickElement('[data-testid="open-modal"]');

    await axe();
});
