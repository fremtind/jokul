import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { type Page, expect, test } from "@playwright/test";
import react from "@vitejs/plugin-react-swc";
import { type ViteDevServer, createServer } from "vite";
/* @ts-ignore */
import { copyJklFonts } from "../vite/copy-jkl-fonts.mjs";
/* @ts-ignore */
import { setupDev } from "../vite/setup-dev.mjs";

export class TestHelper {
    private server?: ViteDevServer;
    private _page: Page;
    private package: string;
    private projectName: string;

    constructor(args: { page: Page; package: string; projectName: string }) {
        this._page = args.page;
        this.package = args.package;
        this.projectName = args.projectName;

        this._page.emulateMedia({
            forcedColors: "none",
            reducedMotion: "reduce",
        });
    }

    async init() {
        this.server = await createServer({
            mode: "production",
            configFile: false,
            plugins: [
                react(),
                copyJklFonts(
                    resolve(
                        fileURLToPath(new URL(".", import.meta.url)),
                        "..",
                        "..",
                        "packages",
                        "jokul",
                        "src",
                        "components",
                        this.package,
                        "development",
                        "public",
                        "fonts",
                    ),
                ),
                setupDev(
                    resolve(
                        fileURLToPath(new URL(".", import.meta.url)),
                        "..",
                        "..",
                        "packages",
                        "jokul",
                        "src",
                        "components",
                        this.package,
                        "development",
                    ),
                ),
            ],
            resolve: {
                alias: {
                    utils: resolve(
                        fileURLToPath(new URL(".", import.meta.url)),
                        "..",
                    ),
                },
            },
            root: resolve(
                fileURLToPath(new URL(".", import.meta.url)),
                "..",
                "..",
                "packages",
                "jokul",
                "src",
                "components",
                this.package,
                "development",
            ),
            define: {
                __CI__: "true",
            },
        });
        await this.server.listen();
        return this.server.config.server.port as number;
    }

    get page() {
        return this._page;
    }

    async close() {
        await this.server?.close();
    }

    async open(path = "/") {
        await this._page.goto(
            `http://localhost:${this.server?.config.server.port}${path}`,
        );
    }

    async clickElement(selector: string) {
        await this._page.click(selector);
    }

    async pressKey(key: string) {
        await this._page.keyboard.press(key);
    }

    async type(selector: string, text: string) {
        await this._page.locator(selector).fill(text);
    }

    async checkProp(testid: string) {
        await this._page.getByTestId(testid).first().check({ force: true });
        return this;
    }

    async setSize(value: "small" | "default" | "large") {
        await this._page
            .getByTestId(`size-${value}`)
            .first()
            .check({ force: true });
        return this;
    }

    async setTheme(value: "light" | "dark") {
        await this._page
            .getByTestId(`theme-${value}`)
            .first()
            .check({ force: true });
        return this;
    }

    async focus(selector: string) {
        await this._page.locator(selector).first().focus();
    }

    private async snapshot(name: string, selector?: string) {
        await this._page.evaluate(() => document.fonts.ready);

        const locator = this._page
            .locator(selector || "[data-testid='component-example']")
            .first();
        const box = await locator.boundingBox();

        if (!box) {
            return;
        }

        const screenshotRoot = `packages/jokul/src/components/${this.package}/integration/__screenshots__`;
        const testName = test.info().title.replaceAll(" ", "-");
        const screenshotPath = `${screenshotRoot}/${testName}-${this.projectName}-${name}.png`;

        const hasScreenshot = existsSync(screenshotPath);

        if (hasScreenshot) {
            await expect(
                await this._page.screenshot({
                    animations: "disabled",
                    caret: "hide",
                    clip: { ...box },
                }),
            ).toMatchSnapshot(`${this.projectName}-${name}`);
        } else {
            await this._page.screenshot({
                animations: "disabled",
                caret: "hide",
                clip: { ...box },
                path: screenshotPath,
            });
        }
    }

    async snapshots({
        before,
        after,
        selector,
        focusElement,
    }: {
        before?: () => Promise<any>;
        after?: () => Promise<any>;
        selector?: string;
        focusElement?: string;
    } = {}) {
        await this.setSize("default");
        await this.setTheme("light");
        await before?.();
        await this.snapshot("default", selector);
        if (focusElement) {
            await this.focus(focusElement);
            await this.snapshot("default-focus", selector);
        }
        await after?.();

        await this.setSize("default");
        await this.setTheme("dark");
        await before?.();
        await this.snapshot("default-dark", selector);
        await after?.();

        await this.setSize("small");
        await this.setTheme("light");
        await before?.();
        await this.snapshot("compact-light", selector);
        await after?.();

        await this.setSize("small");
        await this.setTheme("dark");
        await before?.();
        await this.snapshot("compact-dark", selector);
        await after?.();
    }
}
