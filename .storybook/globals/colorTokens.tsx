import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

export type ThemeValue = "light" | "dark";

export type ColorTokenGroup = "background" | "border" | "text";

export type ColorTokenDefinition = {
    /** CSS custom property name including the leading `--`. */
    name: string;
    /** Human-readable label shown in the playground. */
    label: string;
    group: ColorTokenGroup;
    defaults: Record<ThemeValue, string>;
};

/**
 * Tokens som kan overstyres i Storybook via "Color playground"-siden.
 * Default-verdiene er hentet fra
 * `packages/jokul/src/core/styles/theme/_color-tokens.scss`.
 */
export const colorTokens: ColorTokenDefinition[] = [
    {
        name: "--jkl-color-background-page",
        label: "Background page",
        group: "background",
        defaults: {
            light: "oklch(96% 0.004 67)",
            dark: "oklch(10% 0.007 67)",
        },
    },
    {
        name: "--jkl-color-background-surface-default",
        label: "Surface default",
        group: "background",
        defaults: {
            light: "oklch(92% 0.008 67)",
            dark: "oklch(25% 0.007 67)",
        },
    },
    {
        name: "--jkl-color-background-surface-highlight",
        label: "Surface highlight",
        group: "background",
        defaults: {
            light: "oklch(100% 0.001 67)",
            dark: "oklch(35% 0.007 67)",
        },
    },
    {
        name: "--jkl-color-background-surface-on-surface",
        label: "Surface on-surface",
        group: "background",
        defaults: {
            light: "oklch(96% 0.004 67)",
            dark: "oklch(10% 0.007 67)",
        },
    },
    {
        name: "--jkl-color-background-surface-moderate",
        label: "Surface moderate",
        group: "background",
        defaults: {
            light: "oklch(80% 0.008 67)",
            dark: "oklch(50% 0.007 67)",
        },
    },
    {
        name: "--jkl-color-background-surface-knockout",
        label: "Surface knockout",
        group: "background",
        defaults: {
            light: "oklch(35% 0.007 67)",
            dark: "oklch(85% 0.008 67)",
        },
    },
    {
        name: "--jkl-color-background-surface-error",
        label: "Surface error",
        group: "background",
        defaults: {
            light: "oklch(80% 0.09 16)",
            dark: "oklch(45% 0.146 16)",
        },
    },
    {
        name: "--jkl-color-background-surface-warning",
        label: "Surface warning",
        group: "background",
        defaults: {
            light: "oklch(90% 0.08 94)",
            dark: "oklch(45% 0.065 94)",
        },
    },
    {
        name: "--jkl-color-background-surface-info",
        label: "Surface info",
        group: "background",
        defaults: {
            light: "oklch(80% 0.09 285)",
            dark: "oklch(45% 0.169 285)",
        },
    },
    {
        name: "--jkl-color-background-surface-succes",
        label: "Surface success",
        group: "background",
        defaults: {
            light: "oklch(80% 0.066 156)",
            dark: "oklch(45% 0.095 156)",
        },
    },
    {
        name: "--jkl-color-border-subdued",
        label: "Border subdued",
        group: "border",
        defaults: {
            light: "oklch(80% 0.008 67)",
            dark: "oklch(50% 0.007 67)",
        },
    },
    {
        name: "--jkl-color-border-strong",
        label: "Border strong",
        group: "border",
        defaults: {
            light: "oklch(50% 0.007 67)",
            dark: "oklch(80% 0.008 67)",
        },
    },
    {
        name: "--jkl-color-border-strongest",
        label: "Border strongest",
        group: "border",
        defaults: {
            light: "oklch(0% 0.007 64)",
            dark: "oklch(100% 0.001 67)",
        },
    },
    {
        name: "--jkl-color-border-knockout",
        label: "Border knockout",
        group: "border",
        defaults: {
            light: "oklch(100% 0.001 67)",
            dark: "oklch(0% 0.007 64)",
        },
    },
    {
        name: "--jkl-color-border-info",
        label: "Border info",
        group: "border",
        defaults: {
            light: "oklch(70% 0.145 285)",
            dark: "oklch(60% 0.17 285)",
        },
    },
    {
        name: "--jkl-color-border-success",
        label: "Border success",
        group: "border",
        defaults: {
            light: "oklch(70% 0.089 156)",
            dark: "oklch(60% 0.1 156)",
        },
    },
    {
        name: "--jkl-color-border-error",
        label: "Border error",
        group: "border",
        defaults: {
            light: "oklch(70% 0.13 16)",
            dark: "oklch(60% 0.149 16)",
        },
    },
    {
        name: "--jkl-color-border-warning",
        label: "Border warning",
        group: "border",
        defaults: {
            light: "oklch(70% 0.1 94)",
            dark: "oklch(60% 0.09 94)",
        },
    },
    {
        name: "--jkl-color-text-default",
        label: "Text default",
        group: "text",
        defaults: {
            light: "oklch(0% 0.007 64)",
            dark: "oklch(100% 0.001 67)",
        },
    },
    {
        name: "--jkl-color-text-subdued",
        label: "Text subdued",
        group: "text",
        defaults: {
            light: "oklch(50% 0.007 67)",
            dark: "oklch(80% 0.008 67)",
        },
    },
    {
        name: "--jkl-color-text-knockout",
        label: "Text knockout",
        group: "text",
        defaults: {
            light: "oklch(100% 0.001 67)",
            dark: "oklch(0% 0.007 64)",
        },
    },
    {
        name: "--jkl-color-text-info",
        label: "Text info",
        group: "text",
        defaults: {
            light: "oklch(25% 0.056 285)",
            dark: "oklch(90% 0.034 285)",
        },
    },
    {
        name: "--jkl-color-text-info-strong",
        label: "Text info strong",
        group: "text",
        defaults: {
            light: "oklch(50% 0.186 285)",
            dark: "oklch(70% 0.145 285)",
        },
    },
    {
        name: "--jkl-color-text-success",
        label: "Text success",
        group: "text",
        defaults: {
            light: "oklch(25% 0.024 156)",
            dark: "oklch(90% 0.035 156)",
        },
    },
    {
        name: "--jkl-color-text-success-strong",
        label: "Text success strong",
        group: "text",
        defaults: {
            light: "oklch(50% 0.106 156)",
            dark: "oklch(70% 0.089 156)",
        },
    },
    {
        name: "--jkl-color-text-error",
        label: "Text error",
        group: "text",
        defaults: {
            light: "oklch(25% 0.056 16)",
            dark: "oklch(90% 0.045 16)",
        },
    },
    {
        name: "--jkl-color-text-error-strong",
        label: "Text error strong",
        group: "text",
        defaults: {
            light: "oklch(50% 0.16 16)",
            dark: "oklch(70% 0.13 16)",
        },
    },
    {
        name: "--jkl-color-text-warning",
        label: "Text warning",
        group: "text",
        defaults: {
            light: "oklch(25% 0.03 94)",
            dark: "oklch(90% 0.08 94)",
        },
    },
    {
        name: "--jkl-color-text-warning-strong",
        label: "Text warning strong",
        group: "text",
        defaults: {
            light: "oklch(70% 0.1 94)",
            dark: "oklch(70% 0.1 94)",
        },
    },
];

const STORAGE_PREFIX = "jkl-color-override";
const CHANGE_EVENT = "jkl-color-override-change";

type OverrideMap = Record<string, string>;

const storageKey = (theme: ThemeValue) => `${STORAGE_PREFIX}:${theme}`;

export function resolveTheme(theme: unknown): ThemeValue {
    if (theme === "dark") return "dark";
    if (theme === "light") return "light";
    // Fall back to the user's system preference if Storybook's theme global is not set.
    if (
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }
    return "light";
}

export function readOverrides(theme: ThemeValue): OverrideMap {
    if (typeof window === "undefined") return {};
    try {
        const raw = window.localStorage.getItem(storageKey(theme));
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
            return parsed as OverrideMap;
        }
        return {};
    } catch {
        return {};
    }
}

function writeOverrides(theme: ThemeValue, overrides: OverrideMap) {
    if (typeof window === "undefined") return;
    try {
        if (Object.keys(overrides).length === 0) {
            window.localStorage.removeItem(storageKey(theme));
        } else {
            window.localStorage.setItem(
                storageKey(theme),
                JSON.stringify(overrides),
            );
        }
    } catch {
        // Silently ignore — this is a storybook-only tool.
    }
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: { theme } }));
}

export function setColorOverride(
    theme: ThemeValue,
    name: string,
    value: string,
) {
    const current = readOverrides(theme);
    current[name] = value;
    writeOverrides(theme, current);
}

export function clearColorOverride(theme: ThemeValue, name: string) {
    const current = readOverrides(theme);
    if (!(name in current)) return;
    delete current[name];
    writeOverrides(theme, current);
}

export function clearAllColorOverrides(theme: ThemeValue) {
    writeOverrides(theme, {});
}

export function subscribeToOverrideChanges(
    listener: (theme: ThemeValue) => void,
): () => void {
    if (typeof window === "undefined") return () => {};
    const handler = (event: Event) => {
        const detail = (event as CustomEvent<{ theme: ThemeValue }>).detail;
        listener(detail.theme);
    };
    window.addEventListener(CHANGE_EVENT, handler);
    return () => window.removeEventListener(CHANGE_EVENT, handler);
}

const tokenNames = new Set(colorTokens.map((token) => token.name));

function applyOverridesToBody(theme: ThemeValue) {
    if (typeof window === "undefined") return;
    const body = window.document.body;

    // Remove any previously applied inline overrides for known tokens so that
    // switching theme or clearing overrides resets the value cleanly.
    for (const name of tokenNames) {
        body.style.removeProperty(name);
    }

    const overrides = readOverrides(theme);
    for (const [name, value] of Object.entries(overrides)) {
        if (tokenNames.has(name)) {
            body.style.setProperty(name, value);
        }
    }
}

export const colorTokensDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    const theme = resolveTheme(context.globals.theme);

    useEffect(() => {
        applyOverridesToBody(theme);

        const unsubscribe = subscribeToOverrideChanges((changedTheme) => {
            if (changedTheme === theme) {
                applyOverridesToBody(theme);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [theme]);

    return <Story />;
};

/**
 * Konverterer en vilkårlig CSS-farge (inkl. `oklch(...)`) til en hex-streng
 * på formen `#rrggbb` ved hjelp av et canvas. Returnerer `#000000` i miljøer
 * uten DOM/canvas.
 */
export function cssColorToHex(value: string): string {
    if (typeof document === "undefined") return "#000000";
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "#000000";
    ctx.fillStyle = "#000000";
    try {
        ctx.fillStyle = value;
    } catch {
        return "#000000";
    }
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    const toHex = (channel: number) =>
        channel.toString(16).padStart(2, "0").toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
