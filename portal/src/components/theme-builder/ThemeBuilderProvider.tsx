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
    type ColorToken,
    type ThemeMode,
    tokenKey,
    tokensToSchema,
} from "./tokens";
import { normalizeHex, tokensEqual, tokensHaveErrors } from "./utils";

const STORAGE_KEY = "jkl.theme-builder.draft.v1";
const HISTORY_LIMIT = 50;
const EXPORT_FILE_NAME = "color.custom-brand.tokens.json";

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
    /** Settet med `tokenKey`-strenger for tokens som skiller seg fra basen. */
    editedTokenKeys: ReadonlySet<string>;
    /** Filter-streng (case-insensitiv match mot `group.role`). */
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
    /** Oppdaterer én (token, mode) heks-verdi. `tokenId` er `tokenKey(token)`. */
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
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            const draft = JSON.parse(raw) as DraftSnapshot;
            if (Array.isArray(draft.tokens)) {
                setTokensState(draft.tokens);
            }
        } catch {
            // Ignorer korrupt draft.
        }
    }, []);

    // --- Persistér til localStorage ved hver endring ---
    useEffect(() => {
        if (!hydrated.current || typeof window === "undefined") return;
        try {
            window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({ tokens }),
            );
        } catch {
            // Quota eller private-mode — ignorer.
        }
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
                tokenKey(token) === tokenId
                    ? { ...token, [mode]: normalizeHex(value) }
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
        () => JSON.stringify(tokensToSchema(tokens), null, 4),
        [tokens],
    );
    const hasValidationErrors = useMemo(
        () => tokensHaveErrors(tokens),
        [tokens],
    );
    const isDirty = useMemo(
        () => !tokensEqual(tokens, baseTokens),
        [tokens, baseTokens],
    );
    const editedTokenKeys = useMemo(() => {
        const baseByKey = new Map(baseTokens.map((t) => [tokenKey(t), t]));
        const edited = new Set<string>();
        for (const t of tokens) {
            const base = baseByKey.get(tokenKey(t));
            if (!base) continue;
            const changed = Object.keys(t).some(
                (k) =>
                    k !== "variant" &&
                    k !== "group" &&
                    k !== "role" &&
                    (t as Record<string, string>)[k] !==
                        (base as Record<string, string>)[k],
            );
            if (changed) edited.add(tokenKey(t));
        }
        return edited;
    }, [tokens, baseTokens]);

    // --- Eksport-handlere (med fallback ved manglende clipboard-permission) ---
    const copyExport = useCallback(async () => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(exportValue);
                return;
            }
            if (!fallbackCopyToClipboard(exportValue)) {
                throw new Error("Clipboard API utilgjengelig");
            }
        } catch (error) {
            if (!fallbackCopyToClipboard(exportValue)) {
                console.error("Kunne ikke kopiere eksporten.", error);
                window.alert(
                    "Kunne ikke kopiere automatisk. Bruk Last ned i stedet.",
                );
            }
        }
    }, [exportValue]);

    const downloadExport = useCallback(() => {
        const blob = new Blob([exportValue], {
            type: "application/json;charset=utf-8",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = EXPORT_FILE_NAME;
        document.body.append(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }, [exportValue]);

    const value = useMemo<ThemeBuilderContextValue>(
        () => ({
            copyExport,
            downloadExport,
            exportValue,
            fileName: EXPORT_FILE_NAME,
            hasValidationErrors,
            isDirty,
            editedTokenKeys,
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
            editedTokenKeys,
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

/**
 * Skjult `<textarea>` + `document.execCommand("copy")` som fallback når
 * Clipboard API ikke er tilgjengelig (ikke-secure context, manglende
 * permissions, etc.). Returnerer `true` hvis kopieringen lyktes.
 */
function fallbackCopyToClipboard(value: string): boolean {
    if (typeof document === "undefined") return false;
    const textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";
    document.body.append(textArea);
    textArea.focus();
    textArea.select();
    let didCopy = false;
    try {
        didCopy = document.execCommand("copy");
    } catch {
        didCopy = false;
    }
    textArea.remove();
    return didCopy;
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
