"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import {
    type ReactNode,
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";
import type { ColorScheme } from "../generator/types";
import { useThemeDraft } from "./ThemeDraftContext";

export type ThemePreviewTab = "overview" | "components" | "contrast";

type ThemePreviewContextValue = {
    activeTab: ThemePreviewTab;
    colorScheme: ColorScheme;
    activeColorScheme: ColorScheme;
    isColorSchemeLocked: boolean;
    setActiveTab: (tab: ThemePreviewTab) => void;
    setColorScheme: (colorScheme: ColorScheme) => void;
    toggleColorScheme: () => void;
};

const ThemePreviewContext = createContext<ThemePreviewContextValue | undefined>(
    undefined,
);

type ThemePreviewProviderProps = {
    children: ReactNode;
};

export function ThemePreviewProvider({ children }: ThemePreviewProviderProps) {
    const { draft } = useThemeDraft();
    const [activeTab, setActiveTab] = useState<ThemePreviewTab>("overview");
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const [activeSegment, colorModeSegment] =
        useSelectedLayoutSegments().filter(
            (segment) => !segment.startsWith("("),
        );
    const isColorsStep = activeSegment === "farger";
    const lockedColorScheme: ColorScheme | undefined = !draft.includeDarkMode
        ? "light"
        : isColorsStep
          ? colorModeSegment === "morkt"
              ? "dark"
              : "light"
          : undefined;
    const activeColorScheme = lockedColorScheme ?? colorScheme;
    const isColorSchemeLocked = lockedColorScheme !== undefined;

    const value = useMemo<ThemePreviewContextValue>(() => {
        return {
            activeTab,
            colorScheme,
            activeColorScheme,
            isColorSchemeLocked,
            setActiveTab,
            setColorScheme,
            toggleColorScheme: () => {
                setColorScheme((currentColorScheme) =>
                    currentColorScheme === "light" ? "dark" : "light",
                );
            },
        };
    }, [activeColorScheme, isColorSchemeLocked, activeTab, colorScheme]);

    return (
        <ThemePreviewContext.Provider value={value}>
            {children}
        </ThemePreviewContext.Provider>
    );
}

export function useThemePreview() {
    const context = useContext(ThemePreviewContext);

    if (!context) {
        throw new Error(
            "useThemePreview must be used within ThemePreviewProvider",
        );
    }

    return context;
}
