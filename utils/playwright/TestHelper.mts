import { expect, Page } from "@playwright/test";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer, ViteDevServer } from "vite";
/* @ts-ignore */
import { copyJklFonts } from "../vite/copy-jkl-fonts.mjs";
/* @ts-ignore */
import { setupDev } from "../vite/setup-dev.mjs";

export class TestHelper {
    private server?: ViteDevServer;
    private page: Page;
    private package: string;
    private projectName: string;

    constructor(args: { page: Page; package: string; projectName: string }) {
        this.page = args.page;
        this.package = args.package;
        this.projectName = args.projectName;
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
                        "documentation",
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
                        "documentation",
                    ),
                ),
            ],
            resolve: {
                alias: {
                    "doc-utils": resolve(
                        fileURLToPath(new URL(".", import.meta.url)),
                        "..",
                        "dev-example",
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
                "documentation",
            ),
            define: {
                __CI__: "true",
            },
        });
        await this.server.listen();
        return this.server.config.server.port as number;
    }

    async close() {
        await this.server?.close();
    }

    async open(path: string = "/") {
        await this.page.goto(
            `http://localhost:${this.server?.config.server.port}${path}`,
        );
    }

    async clickElement(selector: string) {
        await this.page.click(selector);
    }

    async pressKey(key: string) {
        await this.page.keyboard.press(key);
    }

    async checkProp(testid: string) {
        await this.page.getByTestId(testid).first().check({ force: true });
        return this;
    }

    async setDensity(value: "compact" | "default") {
        await this.page
            .getByTestId(`density-${value}`)
            .first()
            .check({ force: true });
        return this;
    }

    async setTheme(value: "light" | "dark") {
        await this.page
            .getByTestId(`theme-${value}`)
            .first()
            .check({ force: true });
        return this;
    }

    private async snapshot(name: string, selector?: string) {
        await this.page.evaluate(() => document.fonts.ready);

        await this.page.evaluate(() => {
            return new Promise((resolve) => setTimeout(resolve, 600));
        });

        const locator = this.page
            .locator(selector || "[data-testid='component-example']")
            .first();
        const box = await locator.boundingBox();

        if (!box) {
            return;
        }

        await expect(this.page).toHaveScreenshot(
            `${this.projectName}-${name}`,
            {
                animations: "disabled",
                caret: "hide",
                clip: { ...box },
            },
        );
    }

    async snapshots({
        before,
        after,
        selector,
    }: {
        before?: () => Promise<any>;
        after?: () => Promise<any>;
        selector?: string;
    } = {}) {
        await this.setDensity("default");
        await this.setTheme("light");
        await before?.();
        await this.snapshot("default", selector);
        await after?.();

        await this.setDensity("default");
        await this.setTheme("dark");
        await before?.();
        await this.snapshot("default-dark", selector);
        await after?.();

        await this.setDensity("compact");
        await this.setTheme("light");
        await before?.();
        await this.snapshot("compact-light", selector);
        await after?.();

        await this.setDensity("compact");
        await this.setTheme("dark");
        await before?.();
        await this.snapshot("compact-dark", selector);
        await after?.();
    }
}
