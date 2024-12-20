import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testMatch: "packages/jokul/**/integration/*.spec.ts",
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
        video: "on-first-retry",
    },
    expect: {
        timeout: 5000,
        toMatchSnapshot: {
            // False positives getting you down? Increase this number!
            maxDiffPixelRatio: 0.01,
        },
    },

    snapshotPathTemplate:
        ".{/testFileDir}/__screenshots__/{testName}-{arg}.png",

    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
            fullyParallel: true,
        },
        /*
        / ** To keep the number of screenshots in git down we only run one browser
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
        */
    ],
});
