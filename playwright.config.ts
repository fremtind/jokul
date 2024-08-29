import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testMatch: "**/integration/*.spec.ts",
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    reporter: [["html", { open: "never" }]],
    use: {
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
    },
    expect: {
        timeout: 5000,
    },

    snapshotPathTemplate: ".{/testFileDir}/__screenshots__/{testName}-{arg}.png",

    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
            fullyParallel: true,
        },
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
            fullyParallel: true,
        },
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
            fullyParallel: true,
        },
    ],
});
