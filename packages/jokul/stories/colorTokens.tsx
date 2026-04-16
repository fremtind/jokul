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
 * Tokens som kan overstyres i Storybook. Default-verdiene er hentet fra
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

/**
 * Fjerner `--jkl-color-`-prefikset for å lage et pent navn å bruke som
 * arg-nøkkel i Storybook (f.eks. `background-page`).
 */
export function tokenArgKey(name: string): string {
    return name.replace(/^--jkl-color-/, "");
}

const argKeyToToken = new Map<string, ColorTokenDefinition>(
    colorTokens.map((token) => [tokenArgKey(token.name), token]),
);

const groupSubcategory: Record<ColorTokenGroup, string> = {
    background: "Colors · Background",
    border: "Colors · Border",
    text: "Colors · Text",
};

type ColorArgType = {
    name: string;
    description: string;
    control: { type: "color" };
    table: { category: string; subcategory: string };
};

/**
 * `argTypes`-struktur med en color picker per farge-token. Bruk sammen med
 * {@link colorArgsDecorator} for å gi en story mulighet til å overstyre
 * tokens via Storybook Controls.
 */
export const colorTokenArgTypes: Record<string, ColorArgType> =
    colorTokens.reduce<Record<string, ColorArgType>>((acc, token) => {
        acc[tokenArgKey(token.name)] = {
            name: token.name,
            description: `Overstyrer \`${token.name}\` for denne storyen.`,
            control: { type: "color" },
            table: {
                category: "Farge-tokens",
                subcategory: groupSubcategory[token.group],
            },
        };
        return acc;
    }, {});

/**
 * Tomme args for farge-tokens. Inkluder dette i en storys `args` hvis du vil
 * at alle tokens skal være synlige (med tom verdi = bruker default) i
 * Controls-panelet.
 */
export const emptyColorTokenArgs: Record<string, string> = colorTokens.reduce<
    Record<string, string>
>((acc, token) => {
    acc[tokenArgKey(token.name)] = "";
    return acc;
}, {});

/** Cache for hex-verdier per tema, fylles første gang i nettleseren. */
const defaultHexByTheme: Record<ThemeValue, Map<string, string>> = {
    light: new Map(),
    dark: new Map(),
};

function ensureDefaultHexes(): void {
    if (typeof document === "undefined") return;
    if (defaultHexByTheme.light.size === colorTokens.length) return;
    for (const token of colorTokens) {
        const key = tokenArgKey(token.name);
        defaultHexByTheme.light.set(key, cssColorToHex(token.defaults.light));
        defaultHexByTheme.dark.set(key, cssColorToHex(token.defaults.dark));
    }
}

/**
 * Default args for farge-tokens — satt til hex-verdiene for lyst tema, slik
 * at color-picker-kontrollene viser de faktiske standardfargene. Brukes
 * sammen med {@link colorArgsDecorator}, som ignorerer verdier som matcher
 * aktivt temas default (for å ikke overstyre tema-switching).
 */
export const defaultColorTokenArgs: Record<string, string> = colorTokens.reduce<
    Record<string, string>
>((acc, token) => {
    // Fallback til oklch-strengen hvis vi ikke er i en nettleser (f.eks.
    // under Storybooks indexering i Node). I nettleseren blir verdien
    // konvertert til hex via cssColorToHex.
    acc[tokenArgKey(token.name)] = cssColorToHex(token.defaults.light);
    return acc;
}, {});

function resolveThemeForDecorator(value: unknown): ThemeValue {
    if (value === "dark") return "dark";
    if (value === "light") return "light";
    if (
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }
    return "light";
}

/**
 * Decorator som leser farge-token-args fra konteksten og setter dem som
 * inline CSS-variabler på `<body>`. Verdier som matcher aktivt temas default
 * eller er tomme ignoreres, slik at tema-switching og localStorage-overrides
 * fortsatt fungerer.
 */
export const colorArgsDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    const args = context.args as Record<string, unknown>;
    const theme = resolveThemeForDecorator(context.globals?.theme);

    // Serialiser alle token-args pluss tema til en streng så dependency-
    // array holder konstant lengde uavhengig av antall tokens.
    const serializedArgs =
        theme +
        ":" +
        Array.from(argKeyToToken.keys(), (key) => {
            const value = args[key];
            return typeof value === "string" ? value : "";
        }).join("|");

    useEffect(() => {
        if (typeof window === "undefined") return;
        ensureDefaultHexes();
        const body = window.document.body;
        const activeDefaults = defaultHexByTheme[theme];
        const appliedKeys: string[] = [];

        for (const [key, token] of argKeyToToken.entries()) {
            const rawValue = args[key];
            if (typeof rawValue !== "string" || rawValue.trim() === "") {
                body.style.removeProperty(token.name);
                continue;
            }
            const normalized = rawValue.trim().toUpperCase();
            const activeDefault = activeDefaults.get(key)?.toUpperCase();
            if (normalized === activeDefault) {
                // Args-verdien matcher aktivt tema sin default — ikke
                // overskriv så tema-defaults fortsatt virker.
                body.style.removeProperty(token.name);
                continue;
            }
            body.style.setProperty(token.name, rawValue);
            appliedKeys.push(token.name);
        }

        return () => {
            for (const name of appliedKeys) {
                body.style.removeProperty(name);
            }
        };
    }, [serializedArgs]);

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
