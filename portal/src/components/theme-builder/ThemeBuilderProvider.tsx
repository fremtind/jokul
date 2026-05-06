"use client";

import {
    type PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import {
    readThemeBuilderDraft,
    writeThemeBuilderDraft,
} from "./browser/draftStorage";
import {
    THEME_BUILDER_EXPORT_FILE_NAME,
    copyThemeBuilderExport,
    createThemeBuilderExport,
    downloadThemeBuilderExport,
} from "./browser/exportFile";
import {
    type ColorToken,
    THEME_MODES,
    type ThemeMode,
    getTokenId,
    tokenListsAreEqual,
    tokenValuesAreValid,
} from "./tokens";
import { normalizeHexColor } from "./tokens/colorValue";

const HISTORY_LIMIT = 50;

type DraftSnapshot = {
    tokens: ColorToken[];
};

/**
 * Den offentlige formen til theme-builder-konteksten. Les state og kjør
 * mutasjoner fra hvilken som helst etterkommer via {@link useThemeBuilder}.
 */
type ThemeBuilderContextValue = {
    /** Aktiv token-state (den redigerbare arbeidskopien av strukturen). */
    tokens: ColorToken[];
    /** Pretty-printed JSON av nåværende tokens, klar for kopi/nedlasting. */
    exportValue: string;
    /** Foreslått filnavn for eksport. */
    fileName: string;
    /** Sann når et eller flere tokens har ugyldig heks-verdi. */
    hasValidationErrors: boolean;
    /** Sann når arbeidskopien er endret fra opprinnelig lastede tokens. */
    isDirty: boolean;
    /** Settet med token-ID-er for tokens som skiller seg fra basen. */
    editedTokenIds: ReadonlySet<string>;
    /** Filter-streng (case-insensitiv match mot tokenets fulle sti uten `color`). */
    filter: string;
    setFilter: (next: string) => void;
    /** Vis kun tokens som er endret fra basen. */
    showOnlyEdited: boolean;
    setShowOnlyEdited: (next: boolean) => void;
    canUndo: boolean;
    canRedo: boolean;
    undo: () => void;
    redo: () => void;
    copyExport: () => Promise<void>;
    downloadExport: () => void;
    /** Tilbakestiller tokens til opprinnelig sett. */
    reset: () => void;
    /** Bytter alle tokens — brukes av JSON-editoren etter vellykket parse. */
    replaceTokens: (tokens: ColorToken[]) => void;
    /** Oppdaterer én (token, mode) heks-verdi. `tokenId` er `getTokenId(token)`. */
    updateToken: (tokenId: string, mode: ThemeMode, value: string) => void;
};

const ThemeBuilderContext = createContext<ThemeBuilderContextValue | null>(
    null,
);

type ThemeBuilderProviderProps = PropsWithChildren<{
    baseTokens: ColorToken[];
}>;

/**
 * Wrapper rundt theme-builder-siden, og eier den redigerbare token-staten.
 * `baseTokens` er opprinnelig snapshot — brukes som starttilstand og
 * sammenligningsgrunnlag for `isDirty`/`reset`.
 *
 * Provideren støtter også undo/redo, automatisk lagring i `localStorage`,
 * og filter for å begrense synlige tokens.
 */
export function ThemeBuilderProvider({
    baseTokens,
    children,
}: ThemeBuilderProviderProps) {
    const [tokens, setTokensState] = useState(baseTokens);
    const [history, setHistory] = useState<DraftSnapshot[]>([]);
    const [future, setFuture] = useState<DraftSnapshot[]>([]);
    const [filter, setFilter] = useState("");
    const [showOnlyEdited, setShowOnlyEdited] = useState(false);
    const hydrated = useRef(false);

    // --- Hydrer fra localStorage én gang per session ---
    useEffect(() => {
        if (hydrated.current) return;
        hydrated.current = true;
        if (typeof window === "undefined") return;
        const draft = readThemeBuilderDraft(window.localStorage);
        if (draft) {
            setTokensState(draft.tokens);
        }
    }, []);

    // --- Persistér til localStorage ved hver endring ---
    useEffect(() => {
        if (!hydrated.current || typeof window === "undefined") return;
        writeThemeBuilderDraft(window.localStorage, { tokens });
    }, [tokens]);

    const snapshot = useCallback((): DraftSnapshot => ({ tokens }), [tokens]);

    const pushHistory = useCallback((snap: DraftSnapshot) => {
        setHistory((h) => [...h.slice(-HISTORY_LIMIT + 1), snap]);
        setFuture([]);
    }, []);

    const commit = useCallback(
        (next: { tokens: ColorToken[] }) => {
            const before = snapshot();
            setTokensState(next.tokens);
            pushHistory(before);
        },
        [pushHistory, snapshot],
    );

    const updateToken = useCallback(
        (tokenId: string, mode: ThemeMode, value: string) => {
            const next = tokens.map((token) =>
                getTokenId(token) === tokenId
                    ? { ...token, [mode]: normalizeHexColor(value) }
                    : token,
            );
            commit({ tokens: next });
        },
        [tokens, commit],
    );

    const replaceTokens = useCallback(
        (next: ColorToken[]) => {
            commit({ tokens: next });
        },
        [commit],
    );

    const reset = useCallback(() => {
        commit({ tokens: baseTokens });
    }, [baseTokens, commit]);

    const undo = useCallback(() => {
        setHistory((h) => {
            if (h.length === 0) return h;
            const previous = h[h.length - 1];
            setFuture((f) => [...f, { tokens }]);
            setTokensState(previous.tokens);
            return h.slice(0, -1);
        });
    }, [tokens]);

    const redo = useCallback(() => {
        setFuture((f) => {
            if (f.length === 0) return f;
            const next = f[f.length - 1];
            setHistory((h) => [...h, { tokens }]);
            setTokensState(next.tokens);
            return f.slice(0, -1);
        });
    }, [tokens]);

    // --- Avledede verdier ---
    const exportValue = useMemo(
        () => createThemeBuilderExport(tokens),
        [tokens],
    );
    const hasValidationErrors = useMemo(
        () => !tokenValuesAreValid(tokens),
        [tokens],
    );
    const isDirty = useMemo(
        () => !tokenListsAreEqual(tokens, baseTokens),
        [tokens, baseTokens],
    );
    const editedTokenIds = useMemo(() => {
        const baseById = new Map(baseTokens.map((t) => [getTokenId(t), t]));
        const edited = new Set<string>();
        for (const t of tokens) {
            const base = baseById.get(getTokenId(t));
            if (!base) continue;
            const changed = THEME_MODES.some((mode) => t[mode] !== base[mode]);
            if (changed) edited.add(getTokenId(t));
        }
        return edited;
    }, [tokens, baseTokens]);

    // --- Eksport-handlere (med fallback ved manglende clipboard-permission) ---
    const copyExport = useCallback(async () => {
        await copyThemeBuilderExport(exportValue);
    }, [exportValue]);

    const downloadExport = useCallback(() => {
        downloadThemeBuilderExport(exportValue);
    }, [exportValue]);

    const value = useMemo<ThemeBuilderContextValue>(
        () => ({
            copyExport,
            downloadExport,
            exportValue,
            fileName: THEME_BUILDER_EXPORT_FILE_NAME,
            hasValidationErrors,
            isDirty,
            editedTokenIds,
            filter,
            setFilter,
            showOnlyEdited,
            setShowOnlyEdited,
            canUndo: history.length > 0,
            canRedo: future.length > 0,
            undo,
            redo,
            replaceTokens,
            reset,
            tokens,
            updateToken,
        }),
        [
            copyExport,
            downloadExport,
            exportValue,
            hasValidationErrors,
            isDirty,
            editedTokenIds,
            filter,
            showOnlyEdited,
            history.length,
            future.length,
            undo,
            redo,
            replaceTokens,
            reset,
            tokens,
            updateToken,
        ],
    );

    return (
        <ThemeBuilderContext.Provider value={value}>
            {children}
        </ThemeBuilderContext.Provider>
    );
}

/** Hook for å lese state og mutasjoner fra nærmeste `ThemeBuilderProvider`. */
export function useThemeBuilder() {
    const context = useContext(ThemeBuilderContext);

    if (!context) {
        throw new Error(
            "useThemeBuilder must be used within ThemeBuilderProvider",
        );
    }

    return context;
}
