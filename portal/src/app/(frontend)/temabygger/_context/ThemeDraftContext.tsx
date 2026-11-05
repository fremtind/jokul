"use client";

import { ToastProvider } from "@fremtind/jokul/toast";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
} from "react";
import { CustomFontFaces } from "../_components/CustomFontFaces";
import { useActiveStep } from "../_hooks/useActiveStep";
import { useUndoRedoShortcuts } from "../_hooks/useUndoRedoShortcuts";
import { getStoredThemeDraft } from "../_storage/themeDraftStorage";
import { useThrottledStorageSync } from "../_storage/useThrottledStorageSync";
import {
    type ThemeDraftHistoryAction,
    initializeHistory,
    themeDraftHistoryReducer,
} from "./themeDraftHistory";
import { INITIAL_STATE, type ThemeDraftAction } from "./themeDraftReducer";
import type {
    ThemeDraft,
    ThemeDraftContextState,
    ThemeDraftProviderProps,
} from "./types";

export type { ThemeDraftAction };

const DRAFT_SAVE_DELAY_MS = 250;

const ThemeDraftContext = createContext<ThemeDraftContextState | null>(null);

function initializeDraft(initialDraft?: ThemeDraft) {
    return initializeHistory(initialDraft ?? INITIAL_STATE);
}

export function ThemeDraftProvider(props: ThemeDraftProviderProps) {
    return (
        <ToastProvider placement="right">
            <ThemeDraftProviderContent {...props} />
        </ToastProvider>
    );
}

function ThemeDraftProviderContent({
    children,
    initialDraft,
}: ThemeDraftProviderProps) {
    const [history, dispatchToHistory] = useReducer(
        themeDraftHistoryReducer,
        initialDraft,
        initializeDraft,
    );
    const [storageLoaded, setStorageLoaded] = useState(false);

    const draft = history.present;

    // Hver handling merkes med steget den ble gjort i, slik at angring kan
    // holde seg innenfor det. Steget leses via en ref, så `dispatch` beholder
    // identiteten sin gjennom navigasjonen og ikke tvinger nye renders.
    const activeStep = useActiveStep();
    const activeStepRef = useRef(activeStep);
    activeStepRef.current = activeStep;

    const dispatch = useCallback(
        (action: ThemeDraftHistoryAction) =>
            dispatchToHistory({ ...action, scope: activeStepRef.current }),
        [],
    );

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
    }, [initialDraft, dispatch]);

    useUndoRedoShortcuts(history, dispatch, activeStep);

    useThrottledStorageSync(
        draft,
        storageLoaded && initialDraft === undefined,
        DRAFT_SAVE_DELAY_MS,
    );

    const value = useMemo<ThemeDraftContextState>(
        () => ({ draft, dispatch }),
        [draft, dispatch],
    );

    return (
        <ThemeDraftContext.Provider value={value}>
            <CustomFontFaces />
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
