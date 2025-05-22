import AxeBuilder from "@axe-core/playwright";
import { test as base, expect } from "@playwright/test";

export { expect } from "@playwright/test";

type AxeFixture = {
    axe: (args?: { disableRules?: string[] }) => Promise<void>;
};

export const test = base.extend<AxeFixture>({
    axe: async ({ page }, use, testInfo) => {
        const axe = async ({
            disableRules,
        }: {
            disableRules?: string[];
        } = {}) => {
            const builder = new AxeBuilder({ page }).include(
                "[data-testid='component-example']",
            );
            if (disableRules) {
                builder.disableRules(disableRules);
            }
            const accessibilityScanResults = await builder.analyze();

            await testInfo.attach("accessibility-scan-results", {
                body: JSON.stringify(accessibilityScanResults, null, 2),
                contentType: "application/json",
            });

            expect(accessibilityScanResults.violations).toEqual([]);
        };

        await use(axe);
    },
});
