"use client";

import { useSelectedLayoutSegments } from "next/navigation";
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
    getHistoryStep,
    initializeThemeDraftHistory,
    themeDraftHistoryReducer,
} from "./themeDraftHistoryReducer";
import { INITIAL_STATE, type ThemeDraftAction } from "./themeDraftReducer";
import type {
    ThemeDraft,
    ThemeDraftContextState,
    ThemeDraftProviderProps,
} from "./types";

export type { ThemeDraftAction };

const DRAFT_SAVE_DELAY_MS = 250;
const STEP_ORDER: Record<string, number> = {
    identitet: 0,
    grunnfarge: 1,
    farger: 2,
    "farger/morkt": 3,
    innsending: 4,
};

const ThemeDraftContext = createContext<ThemeDraftContextState | null>(null);

function initializeDraft(initialDraft?: ThemeDraft) {
    return initialDraft ?? INITIAL_STATE;
}

export function ThemeDraftProvider({
    children,
    initialDraft,
}: ThemeDraftProviderProps) {
    const [history, dispatch] = useReducer(
        themeDraftHistoryReducer,
        initialDraft,
        (draft) => initializeThemeDraftHistory(initializeDraft(draft)),
    );
    const draft = history.present;
    const activeStep = getHistoryStep(useSelectedLayoutSegments());
    const [previousStep, setPreviousStep] = useState(activeStep);
    const [storageLoaded, setStorageLoaded] = useState(false);

    // Juster historikken før children rendres med det nye steget.
    if (activeStep !== previousStep) {
        setPreviousStep(activeStep);
        if (
            activeStep &&
            previousStep &&
            STEP_ORDER[activeStep] > STEP_ORDER[previousStep]
        ) {
            dispatch({ type: "RESET_HISTORY" });
        }
    }

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
        () => ({
            draft,
            dispatch,
            storageLoaded,
            canUndo: !!activeStep && history.past.at(-1)?.step === activeStep,
            canRedo: !!activeStep && history.future.at(-1)?.step === activeStep,
        }),
        [draft, storageLoaded, history.past, history.future, activeStep],
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
