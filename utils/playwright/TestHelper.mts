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
        const locator = this._page.locator(selector).first();

        await this._page.evaluate(() => {
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
            const html = document.documentElement;
            html.removeAttribute("data-mousenavigation");
            html.removeAttribute("data-touchnavigation");
        });

        for (let attempt = 0; attempt < 50; attempt++) {
            const isFocused = await locator.evaluate(
                (element) => element === document.activeElement,
            );

            if (isFocused) {
                return;
            }

            await this._page.keyboard.press("Tab");
        }

        await locator.focus();
    }

    private async assertFocusOutline(selector: string) {
        const outline = await this._page.locator(selector).first().evaluate(
            (element) => {
                const getOutline = (
                    target: Element,
                    pseudoElement?: string,
                ) => {
                    const styles = window.getComputedStyle(target, pseudoElement);
                    const outlineWidth = Number.parseFloat(styles.outlineWidth);

                    if (
                        styles.outlineStyle !== "none" &&
                        Number.isFinite(outlineWidth) &&
                        outlineWidth > 0
                    ) {
                        return {
                            outlineStyle: styles.outlineStyle,
                            outlineWidth: styles.outlineWidth,
                        };
                    }

                    return null;
                };

                let current =
                    element instanceof HTMLElement ? element : null;

                while (current && current !== document.body) {
                    const outline =
                        getOutline(current) ||
                        getOutline(current, "::before") ||
                        getOutline(current, "::after");

                    if (outline) {
                        return outline;
                    }

                    current = current.parentElement;
                }

                return null;
            },
        );

        expect(outline).not.toBeNull();
        expect(outline?.outlineStyle).toBe("solid");
        expect(outline?.outlineWidth).toBe("3px");
    }

    async expectFocusOutline(selector: string) {
        await this.assertFocusOutline(selector);
    }

    private async snapshot(
        name: string,
        selector?: string,
        selectorPadding = 0,
    ) {
        await this._page.evaluate(() => document.fonts.ready);

        const locator = this._page
            .locator(selector || "[data-testid='component-example']")
            .first();
        const box = await locator.boundingBox();

        if (!box) {
            return;
        }
        const padding = Math.max(0, selectorPadding);
        const viewport = this._page.viewportSize();
        const viewportWidth = viewport?.width ?? box.x + box.width;
        const viewportHeight = viewport?.height ?? box.y + box.height;
        const clipX = Math.max(0, box.x - padding);
        const clipY = Math.max(0, box.y - padding);
        const clipWidth = Math.min(
            viewportWidth - clipX,
            box.width + padding * 2,
        );
        const clipHeight = Math.min(
            viewportHeight - clipY,
            box.height + padding * 2,
        );
        const clip = {
            x: clipX,
            y: clipY,
            width: clipWidth,
            height: clipHeight,
        };

        const screenshotRoot = `packages/jokul/src/components/${this.package}/integration/__screenshots__`;
        const testName = test.info().title.replaceAll(" ", "-");
        const screenshotPath = `${screenshotRoot}/${testName}-${this.projectName}-${name}.png`;

        const hasScreenshot = existsSync(screenshotPath);

        if (hasScreenshot) {
            await expect(
                await this._page.screenshot({
                    animations: "disabled",
                    caret: "hide",
                    clip,
                }),
            ).toMatchSnapshot(`${this.projectName}-${name}`);
        } else {
            await this._page.screenshot({
                animations: "disabled",
                caret: "hide",
                clip,
                path: screenshotPath,
            });
        }
    }

    async snapshots({
        before,
        after,
        selector,
        selectorPadding,
        focusElement,
    }: {
        before?: () => Promise<any>;
        after?: () => Promise<any>;
        selector?: string;
        selectorPadding?: number;
        focusElement?:
            | string
            | {
                  target: string;
                  outline?: string;
              };
    } = {}) {
        await this.setSize("default");
        await this.setTheme("light");
        await before?.();
        await this.snapshot("default", selector, selectorPadding);
        if (focusElement) {
            const focusTarget =
                typeof focusElement === "string"
                    ? focusElement
                    : focusElement.target;
            const outlineTarget =
                typeof focusElement === "string"
                    ? focusElement
                    : focusElement.outline || focusTarget;
            await this.focus(focusTarget);
            await this.assertFocusOutline(outlineTarget);
        }
        await after?.();

        await this.setSize("default");
        await this.setTheme("dark");
        await before?.();
        await this.snapshot("default-dark", selector, selectorPadding);
        await after?.();

        await this.setSize("small");
        await this.setTheme("light");
        await before?.();
        await this.snapshot("compact-light", selector, selectorPadding);
        await after?.();

        await this.setSize("small");
        await this.setTheme("dark");
        await before?.();
        await this.snapshot("compact-dark", selector, selectorPadding);
        await after?.();
    }
}
