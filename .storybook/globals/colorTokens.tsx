import type { ReactRenderer } from "@storybook/nextjs";
import { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";
import {
    colorTokens,
    type ColorTokenDefinition,
    type ThemeValue,
} from "../../packages/jokul/stories/colorTokens.js";

export {
    colorArgsDecorator,
    colorTokenArgTypes,
    colorTokens,
    cssColorToHex,
    defaultColorTokenArgs,
    emptyColorTokenArgs,
    tokenArgKey,
} from "../../packages/jokul/stories/colorTokens.js";
export type {
    ColorTokenDefinition,
    ColorTokenGroup,
    ThemeValue,
} from "../../packages/jokul/stories/colorTokens.js";

const STORAGE_PREFIX = "jkl-color-override";
const CHANGE_EVENT = "jkl-color-override-change";

type OverrideMap = Record<string, string>;

const storageKey = (theme: ThemeValue) => `${STORAGE_PREFIX}:${theme}`;

export function resolveTheme(theme: unknown): ThemeValue {
    if (theme === "dark") return "dark";
    if (theme === "light") return "light";
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

const tokenNames: Set<string> = new Set(
    colorTokens.map((token: ColorTokenDefinition) => token.name),
);

function applyOverridesToBody(theme: ThemeValue) {
    if (typeof window === "undefined") return;
    const body = window.document.body;

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
