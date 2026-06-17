"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import {
    DEFAULT_FONT_OPTION_ID,
    type FontOptionId,
} from "../_shared/fontOptions";
import { isHex, normalizeHex } from "../_shared/utils";
import { generatePalette } from "../generator/generate";
import type { ColorScheme } from "../generator/types";
import { INITIAL_COLOR_TOKENS } from "./initialColorTokens";
import type {
    ThemeDraftColorTokenValue,
    ThemeDraftColorTokensState,
    ThemeDraftContextState,
    ThemeDraftProviderProps,
} from "./types";

const ThemeDraftContext = createContext<ThemeDraftContextState | null>(null);

export function ThemeDraftProvider({ children }: ThemeDraftProviderProps) {
    const [colorTokens, setColorTokens] =
        useState<ThemeDraftColorTokensState>(INITIAL_COLOR_TOKENS);
    const [regularFont, setRegularFont] = useState<FontOptionId>(
        DEFAULT_FONT_OPTION_ID,
    );
    const [displayFont, setDisplayFont] = useState<FontOptionId>(
        DEFAULT_FONT_OPTION_ID,
    );
    const [themeName, setThemeName] = useState("");
    const [includeDarkMode, setIncludeDarkMode] = useState(true);

    const updateToken = useCallback(
        (
            group: string,
            role: string,
            colorScheme: ColorScheme,
            nextValue: string,
        ) => {
            const normalizedValue = normalizeHex(nextValue);

            setColorTokens((previousTokens) => {
                const editableTokens = previousTokens as Record<
                    string,
                    Record<string, ThemeDraftColorTokenValue>
                >;
                const token = editableTokens[group]?.[role];
                if (!token) {
                    return previousTokens;
                }

                return {
                    ...previousTokens,
                    [group]: {
                        ...editableTokens[group],
                        [role]: {
                            ...token,
                            [colorScheme]: normalizedValue,
                        },
                    },
                } as ThemeDraftColorTokensState;
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
            const contrastToken = previousTokens.background?.contrast;
            if (!contrastToken) {
                return previousTokens;
            }

            return {
                ...previousTokens,
                background: {
                    ...previousTokens.background,
                    contrast: {
                        ...contrastToken,
                        light: normalizedHexValue,
                    },
                },
            };
        });
    }, []);

    const replaceColorTokens = useCallback(
        (nextColorTokens: ThemeDraftColorTokensState) => {
            setColorTokens(nextColorTokens);
        },
        [],
    );

    const value = useMemo<ThemeDraftContextState>(() => {
        return {
            color: {
                tokens: colorTokens,
                applyBaseColor,
                updateToken,
                replaceTokens: replaceColorTokens,
            },
            identity: {
                themeName,
                setThemeName,
            },
            settings: {
                includeDarkMode,
                setIncludeDarkMode,
            },
            typography: {
                regularFont,
                displayFont,
                setRegularFont,
                setDisplayFont,
            },
        };
    }, [
        colorTokens,
        applyBaseColor,
        replaceColorTokens,
        updateToken,
        regularFont,
        displayFont,
        themeName,
        includeDarkMode,
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
