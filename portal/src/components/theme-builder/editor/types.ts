import type { ThemeMode } from "../tokens";

/** Felles callback-signatur for alle editor-felter som muterer et token. */
export type TokenChangeHandler = (
    tokenId: string,
    mode: ThemeMode,
    value: string,
) => void;
