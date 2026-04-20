"use client";

import {
    type PropsWithChildren,
    createContext,
    useContext,
    useState,
} from "react";
import type { EditableColorToken, ThemeBuilderState, ThemeMode } from "./types";
import {
    areTokensEqual,
    buildColorSchemeExport,
    getBrandSlug,
    normalizeHexValue,
    tokensHaveValidationErrors,
} from "./utils";

type ThemeBuilderContextValue = ThemeBuilderState & {
    exportValue: string;
    fileName: string;
    hasValidationErrors: boolean;
    isDirty: boolean;
    copyExport: () => Promise<void>;
    downloadExport: () => void;
    reset: () => void;
    replaceTokens: (tokens: EditableColorToken[]) => void;
    setBrandName: (brandName: string) => void;
    updateToken: (tokenId: string, mode: ThemeMode, value: string) => void;
};

const ThemeBuilderContext = createContext<ThemeBuilderContextValue | null>(
    null,
);

type ThemeBuilderProviderProps = PropsWithChildren<{
    baseTokens: EditableColorToken[];
}>;

export function ThemeBuilderProvider({
    baseTokens,
    children,
}: ThemeBuilderProviderProps) {
    const [tokens, setTokens] = useState(baseTokens);
    const [brandName, setBrandNameState] = useState("");

    const exportValue = JSON.stringify(buildColorSchemeExport(tokens), null, 4);
    const fileName = `color.${getBrandSlug(brandName)}.tokens.json`;
    const hasValidationErrors = tokensHaveValidationErrors(tokens);
    const isDirty = !areTokensEqual(tokens, baseTokens);

    const updateToken = (tokenId: string, mode: ThemeMode, value: string) => {
        setTokens((currentTokens) =>
            currentTokens.map((token) =>
                token.id === tokenId
                    ? {
                          ...token,
                          [mode]: normalizeHexValue(value),
                      }
                    : token,
            ),
        );
    };

    const setBrandName = (nextBrandName: string) => {
        setBrandNameState(nextBrandName);
    };

    const replaceTokens = (nextTokens: EditableColorToken[]) => {
        setTokens(nextTokens);
    };

    const reset = () => {
        setTokens(baseTokens);
        setBrandNameState("");
    };

    const copyExport = async () => {
        await navigator.clipboard.writeText(exportValue);
    };

    const downloadExport = () => {
        const blob = new Blob([exportValue], {
            type: "application/json;charset=utf-8",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = fileName;
        document.body.append(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <ThemeBuilderContext.Provider
            value={{
                brandName,
                copyExport,
                downloadExport,
                exportValue,
                fileName,
                hasValidationErrors,
                isDirty,
                replaceTokens,
                reset,
                setBrandName,
                tokens,
                updateToken,
            }}
        >
            {children}
        </ThemeBuilderContext.Provider>
    );
}

export function useThemeBuilder() {
    const context = useContext(ThemeBuilderContext);

    if (!context) {
        throw new Error(
            "useThemeBuilder must be used within ThemeBuilderProvider",
        );
    }

    return context;
}
