"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    useState,
} from "react";
import { getStoredThemeDraft } from "../_storage/themeDraftStorage";
import { useThrottledStorageSync } from "../_storage/useThrottledStorageSync";
import {
    INITIAL_STATE,
    type ThemeDraftAction,
    themeDraftReducer,
} from "./themeDraftReducer";
import type { ThemeDraftContextState, ThemeDraftProviderProps } from "./types";

export type { ThemeDraftAction };

const DRAFT_SAVE_DELAY_MS = 250;

const ThemeDraftContext = createContext<ThemeDraftContextState | null>(null);

export function ThemeDraftProvider({ children }: ThemeDraftProviderProps) {
    const [draft, dispatch] = useReducer(themeDraftReducer, INITIAL_STATE);
    const [storageLoaded, setStorageLoaded] = useState(false);

    // Last inn lagret utkast fra localStorage ved mount
    useEffect(() => {
        const stored = getStoredThemeDraft();
        if (stored) {
            dispatch({ type: "SET_DRAFT", draft: stored });
        }
        setStorageLoaded(true);
    }, []);

    useThrottledStorageSync(draft, storageLoaded, DRAFT_SAVE_DELAY_MS);

    const value = useMemo<ThemeDraftContextState>(
        () => ({ draft, dispatch }),
        [draft],
    );

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
