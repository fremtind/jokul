"use client";

import {
    type PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import type {
    ColorVariant,
    EditableColorToken,
    PreviewColorScheme,
    ThemeBuilderState,
    ThemeMode,
} from "./types";
import {
    areTokensEqual,
    buildColorSchemeExport,
    getBrandSlug,
    normalizeHexValue,
    tokensHaveValidationErrors,
} from "./utils";

type ThemeBuilderContextValue = ThemeBuilderState & {
    copyStatus: "idle" | "success" | "error";
    exportValue: string;
    fileName: string;
    hasValidationErrors: boolean;
    isDirty: boolean;
    copyExport: () => Promise<void>;
    downloadExport: () => void;
    reset: () => void;
    replaceTokens: (tokens: EditableColorToken[]) => void;
    setActiveVariant: (variant: ColorVariant) => void;
    setBrandName: (brandName: string) => void;
    setPreviewColorScheme: (scheme: PreviewColorScheme) => void;
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
    const [activeVariant, setActiveVariant] = useState<ColorVariant>("neutral");
    const [brandName, setBrandNameState] = useState("");
    const [previewColorScheme, setPreviewColorScheme] =
        useState<PreviewColorScheme>("system");
    const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
        "idle",
    );

    useEffect(() => {
        if (copyStatus === "idle") {
            return;
        }

        const timeout = window.setTimeout(() => {
            setCopyStatus("idle");
        }, 2500);

        return () => window.clearTimeout(timeout);
    }, [copyStatus]);

    const exportValue = JSON.stringify(buildColorSchemeExport(tokens), null, 4);
    const fileName = `color.${getBrandSlug(brandName)}.tokens.json`;
    const hasValidationErrors = tokensHaveValidationErrors(tokens);
    const isDirty = !areTokensEqual(tokens, baseTokens);

    const updateToken = (tokenId: string, mode: ThemeMode, value: string) => {
        setCopyStatus("idle");
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
        setCopyStatus("idle");
        setBrandNameState(nextBrandName);
    };

    const replaceTokens = (nextTokens: EditableColorToken[]) => {
        setCopyStatus("idle");
        setTokens(nextTokens);
    };

    const reset = () => {
        setTokens(baseTokens);
        setActiveVariant("neutral");
        setBrandNameState("");
        setPreviewColorScheme("system");
        setCopyStatus("idle");
    };

    const copyExport = async () => {
        try {
            await navigator.clipboard.writeText(exportValue);
            setCopyStatus("success");
        } catch {
            setCopyStatus("error");
        }
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
                activeVariant,
                brandName,
                copyExport,
                copyStatus,
                downloadExport,
                exportValue,
                fileName,
                hasValidationErrors,
                isDirty,
                previewColorScheme,
                replaceTokens,
                reset,
                setActiveVariant,
                setBrandName,
                setPreviewColorScheme,
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
