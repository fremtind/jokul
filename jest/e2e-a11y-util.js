import puppeteer from "puppeteer";
import { setup, teardown } from "jest-dev-server";
import pa11y from "pa11y";

export const e2eTest = ({ port, packageName, timeout = 1000 }) => {
    let browser;

    const prepareSetup = async () => {
        await setup({ command: `yarn dev packages/${packageName}/index.html --port ${port}` });
        browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
        await new Promise((resolve) => setTimeout(resolve, timeout));
    };

    beforeAll(async () => {
        await prepareSetup();
    });

    afterAll(async () => {
        await browser.close();
        await teardown();
    });

    describe(`${packageName} e2e`, () => {
        test("snapshot", async () => {
            const page = await browser.newPage();
            await page.goto(`http://localhost:${port}`);
            const image = await page.screenshot();

            expect(image).toMatchImageSnapshot();
        });

        test("a11y", async () => {
            const results = await pa11y(`http://localhost:${port}`, {
                browser: browser,
            });
            expect(results.issues).toHaveLength(0);
        });
    });
};
