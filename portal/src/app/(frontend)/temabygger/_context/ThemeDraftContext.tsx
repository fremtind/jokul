"use client";

import {
    type ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { DEFAULT_FONT_OPTION_ID, type FontOptionId } from "../_lib/fontOptions";
import { isHex, normalizeHex } from "../_lib/hexColor";
import { generatePalette } from "../generator/generate";
import type { ColorScheme } from "../generator/types";

// TODO(#6193): Erstatt ColorToken og ColorTokens med SimpleLightDarkPalette fra "../generator/types".
export type ColorToken = Record<ColorScheme, string>;
export type ColorTokens = Record<string, Record<string, ColorToken>>;

const BASE_COLOR_TOKEN = {
    group: "background",
    role: "contrast",
    colorScheme: "light",
} as const satisfies {
    group: string;
    role: string;
    colorScheme: ColorScheme;
};

/**
 * Standardfarger før distributøren har valgt en egen kontrastfarge.
 */
const INITIAL_COLOR_TOKENS = {
    background: {
        page: {
            light: "#F3F0ED",
            dark: "#0E0D0C",
        },
        container: {
            light: "#FFFFFF",
            dark: "#262221",
        },
        "container-accent": {
            light: "#E4DFD8",
            dark: "#3C3434",
        },
        contrast: {
            light: "#262221",
            dark: "#F3F0ED",
        },
    },
    text: {
        default: {
            light: "#0E0D0C",
            dark: "#FFFFFF",
        },
        subdued: {
            light: "#636060",
            dark: "#C8C5C3",
        },
        accent: {
            light: "#0E0D0C",
            dark: "#FFFFFF",
        },
        "on-contrast": {
            light: "#FFFFFF",
            dark: "#0E0D0C",
        },
    },
    border: {
        default: {
            light: "#636060",
            dark: "#C8C5C3",
        },
        subdued: {
            light: "#C8C5C3",
            dark: "#636060",
        },
        strong: {
            light: "#0E0D0C",
            dark: "#FFFFFF",
        },
    },
} satisfies ColorTokens;

type ThemeColorDraft = {
    baseColor: string;
    tokens: ColorTokens;
    applyBaseColor: (value: string) => void;
    updateToken: (
        group: string,
        role: string,
        colorScheme: ColorScheme,
        value: string,
    ) => void;
    replaceTokens: (nextColorTokens: ColorTokens) => void;
};

type ThemeTypographyDraft = {
    regularFont: FontOptionId;
    displayFont: FontOptionId;
    setRegularFont: (id: FontOptionId) => void;
    setDisplayFont: (id: FontOptionId) => void;
};

type ThemeIdentityDraft = {
    themeName: string;
    setThemeName: (name: string) => void;
};

type ThemeDraftContextValue = {
    color: ThemeColorDraft;
    identity: ThemeIdentityDraft;
    typography: ThemeTypographyDraft;
};

const ThemeDraftContext = createContext<ThemeDraftContextValue | null>(null);

type ThemeDraftProviderProps = {
    children: ReactNode;
};

export function ThemeDraftProvider({ children }: ThemeDraftProviderProps) {
    const [colorTokens, setColorTokens] =
        useState<ColorTokens>(INITIAL_COLOR_TOKENS);
    const [regularFont, setRegularFont] = useState<FontOptionId>(
        DEFAULT_FONT_OPTION_ID,
    );
    const [displayFont, setDisplayFont] = useState<FontOptionId>(
        DEFAULT_FONT_OPTION_ID,
    );
    const [themeName, setThemeName] = useState("");

    const updateToken = useCallback(
        (
            group: string,
            role: string,
            colorScheme: ColorScheme,
            nextValue: string,
        ) => {
            const normalizedValue = normalizeHex(nextValue);

            setColorTokens((previousTokens) => {
                const token = previousTokens[group]?.[role];
                if (!token) {
                    return previousTokens;
                }

                return {
                    ...previousTokens,
                    [group]: {
                        ...previousTokens[group],
                        [role]: {
                            ...token,
                            [colorScheme]: normalizedValue,
                        },
                    },
                };
            });
        },
        [],
    );

    const applyBaseColor = useCallback((nextValue: string) => {
        const normalizedHexValue = normalizeHex(nextValue);

        if (isHex(normalizedHexValue)) {
            setColorTokens(generatePalette(normalizedHexValue));
            return;
        }

        setColorTokens((previousTokens) => {
            const { group, role, colorScheme } = BASE_COLOR_TOKEN;
            const baseToken = previousTokens[group]?.[role];
            if (!baseToken) {
                return previousTokens;
            }

            return {
                ...previousTokens,
                [group]: {
                    ...previousTokens[group],
                    [role]: {
                        ...baseToken,
                        [colorScheme]: normalizedHexValue,
                    },
                },
            };
        });
    }, []);

    const replaceColorTokens = useCallback((nextColorTokens: ColorTokens) => {
        setColorTokens(nextColorTokens);
    }, []);

    const baseColor = useMemo(() => {
        const { group, role, colorScheme } = BASE_COLOR_TOKEN;
        return (
            colorTokens[group]?.[role]?.[colorScheme] ??
            INITIAL_COLOR_TOKENS[group][role][colorScheme]
        );
    }, [colorTokens]);

    const value = useMemo<ThemeDraftContextValue>(() => {
        return {
            color: {
                baseColor,
                tokens: colorTokens,
                applyBaseColor,
                updateToken,
                replaceTokens: replaceColorTokens,
            },
            identity: {
                themeName,
                setThemeName,
            },
            typography: {
                regularFont,
                displayFont,
                setRegularFont,
                setDisplayFont,
            },
        };
    }, [
        baseColor,
        colorTokens,
        applyBaseColor,
        replaceColorTokens,
        updateToken,
        regularFont,
        displayFont,
        themeName,
    ]);

    return (
        <ThemeDraftContext.Provider value={value}>
            {children}
        </ThemeDraftContext.Provider>
    );
}

export function useThemeDraft() {
    const context = useContext(ThemeDraftContext);
    if (!context) {
        throw new Error("useThemeDraft må brukes innenfor ThemeDraftProvider");
    }
    return context;
}
