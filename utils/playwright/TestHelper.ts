import * as path from "node:path";
import { expect, Page } from "@playwright/test";
import { createServer, ViteDevServer } from "vite";

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
            root: path.resolve(".", "packages", this.package),
        });
        await this.server.listen();
        return this.server.config.server.port as number;
    }

    async close() {
        await this.server?.close();
    }

    async open(path: string = "/") {
        await this.page.goto(`http://localhost:${this.server?.config.server.port}${path}`);
    }

    async clickElement(selector: string) {
        await this.page.click(selector);
    }

    async checkProp(testid: string) {
        await this.page.getByTestId(testid).check();
        return this;
    }

    async setDensity(value: "compact" | "default") {
        await this.page.getByTestId(`density-${value}`).check();
        return this;
    }

    async setTheme(value: "light" | "dark") {
        await this.page.getByTestId(`theme-${value}`).check();
        return this;
    }

    private async snapshot(name: string) {
        await expect(this.page).toHaveScreenshot(`${this.projectName}-${name}`, {
            animations: "disabled",
            fullPage: true,
            stylePath: path.resolve(".", "utils", "playwright", "screenshot.css"),
        });
    }

    async snapshots() {
        if (this.projectName === "edge-high-contrast") {
            await this.page.emulateMedia({ forcedColors: "active" });

            await this.setDensity("default");
            await this.snapshot("default");

            await this.setDensity("compact");
            await this.snapshot("compact");

            await this.page.emulateMedia({ forcedColors: null });

            return;
        }

        await this.setDensity("default");
        await this.setTheme("light");
        await this.snapshot("default");

        await this.setDensity("default");
        await this.setTheme("dark");
        await this.snapshot("default-dark");

        await this.setDensity("compact");
        await this.setTheme("light");
        await this.snapshot("compact-light");

        await this.setDensity("compact");
        await this.setTheme("dark");
        await this.snapshot("compact-dark");
    }
}
