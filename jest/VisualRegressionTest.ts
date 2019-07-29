export const visualRegressionTest = (componentName: string, wait = { timeout: 0 }) =>
    it(`should match last snapshot of ${componentName}`, async () => {
        const component = componentName.slice(14, -6).replace("-", "");

        await page.goto(`${process.env.VISUAL_TEST_ENV || "http://localhost:9000"}/components/${component}?fullscreen`);

        await page.waitFor(wait.timeout);

        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            customDiffConfig: { threshold: 0.1, includeAA: true },
        });
    });
