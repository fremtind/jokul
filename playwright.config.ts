import { defineConfig, devices } from "@playwright/test";

const SERVER_ADDRESS = "127.0.0.1";
const SERVER_PORT = "6007";
export const STORYBOOK_URL = `http://${SERVER_ADDRESS}:${SERVER_PORT}`;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
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

    webServer: {
        command: `pnpm exec http-server storybook-static -p ${SERVER_PORT} -a ${SERVER_ADDRESS} --silent`,
        url: STORYBOOK_URL,
        reuseExistingServer: !process.env.CI,
        stdout: "ignore",
        stderr: "pipe",
    },

    projects: [
        {
            // Denne heter chromium for ikke å endre navn på eksisterende tester
            name: "chromium",
            testMatch: "packages/jokul/**/integration/*.spec.ts",
            use: { ...devices["Desktop Chrome"] },
            fullyParallel: true,
            snapshotPathTemplate:
                ".{/testFileDir}/__screenshots__/{testName}-{arg}.png",
        },
        {
            name: "Nye integrasjonstester",
            testMatch: "visual-regression/visual.spec.ts",
            use: { ...devices["Desktop Chrome"] },
            fullyParallel: true,
        },
    ],
});
