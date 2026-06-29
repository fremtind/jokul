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
import type {
    ThemeDraft,
    ThemeDraftContextState,
    ThemeDraftProviderProps,
} from "./types";

export type { ThemeDraftAction };

const DRAFT_SAVE_DELAY_MS = 250;

const ThemeDraftContext = createContext<ThemeDraftContextState | null>(null);

function initializeDraft(initialDraft?: ThemeDraft) {
    return initialDraft ?? INITIAL_STATE;
}

export function ThemeDraftProvider({
    children,
    initialDraft,
}: ThemeDraftProviderProps) {
    const [draft, dispatch] = useReducer(
        themeDraftReducer,
        initialDraft,
        initializeDraft,
    );
    const [storageLoaded, setStorageLoaded] = useState(false);

    // Last inn lagret utkast fra localStorage ved mount når route ikke har et eksplisitt draft
    useEffect(() => {
        if (initialDraft) {
            setStorageLoaded(true);
            return;
        }

        const stored = getStoredThemeDraft();
        if (stored) {
            dispatch({ type: "SET_DRAFT", draft: stored });
        }
        setStorageLoaded(true);
    }, [initialDraft]);

    useThrottledStorageSync(
        draft,
        storageLoaded && initialDraft === undefined,
        DRAFT_SAVE_DELAY_MS,
    );

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
