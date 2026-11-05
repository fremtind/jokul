import type { ThemeDraft } from "../_context/types";
import {
    DEFAULT_BORDER_RADIUS_SCALE_ID,
    isBorderRadiusScaleId,
} from "./borderRadius";
import { type CustomFonts, isCustomFonts } from "./customFont";
import {
    CUSTOM_FONT_SELECTION,
    DEFAULT_DISPLAY_FONT_OPTION_ID,
    DEFAULT_REGULAR_FONT_OPTION_ID,
    type FontSelectionId,
    isFontSelectionId,
} from "./fontOptions";

export const THEME_DRAFT_QUERY_PARAM = "draft";
export const THEME_DRAFT_VERSION = 1;

export type ThemeDraftPayload = {
    version: typeof THEME_DRAFT_VERSION;
    draft: ThemeDraft;
};

/**
 * Lenka bærer utkastet som spørringsparameter, og en fontfil som base64 er
 * titusener av tegn — mer enn både nettlesere og meldingsklienter tar imot.
 * Opplastede fonter faller derfor ut av lenka, og slotene som pekte på dem
 * faller tilbake til en standardfont. Mottakeren får fontfila separat; se
 * `createHandoverMessage`.
 */
export function createThemePreviewHref(draft: ThemeDraft): string {
    const params = new URLSearchParams();
    const payload = {
        version: THEME_DRAFT_VERSION,
        draft: {
            ...draft,
            regularFont: withoutCustomFont(
                draft.regularFont,
                DEFAULT_REGULAR_FONT_OPTION_ID,
            ),
            displayFont: withoutCustomFont(
                draft.displayFont,
                DEFAULT_DISPLAY_FONT_OPTION_ID,
            ),
            customFonts: {},
        },
    } satisfies ThemeDraftPayload;

    params.set(THEME_DRAFT_QUERY_PARAM, encodeParam(JSON.stringify(payload)));

    return `/temabygger/forhandsvisning?${params.toString()}`;
}

/**
 * Lenka puttes inn som parameter i en e-post- eller chatlenke og kodes dermed
 * to ganger. Rå JSON blir nesten tre ganger så lang av prosentkodingen, mens
 * base64url bare består av tegn som ikke må kodes, så lenka holder seg under
 * grensene Outlook og Teams har for dyplenker.
 */
function encodeParam(json: string): string {
    const bytes = new TextEncoder().encode(json);
    let binary = "";
    for (const byte of bytes) {
        binary += String.fromCharCode(byte);
    }
    return btoa(binary)
        .replaceAll("+", "-")
        .replaceAll("/", "_")
        .replaceAll("=", "");
}

function decodeParam(value: string): string {
    const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
    const binary = atob(base64);
    return new TextDecoder().decode(
        Uint8Array.from(binary, (char) => char.charCodeAt(0)),
    );
}

/** Leser parameteren fra en forhåndsvisningslenke, også eldre lenker med rå JSON. */
export function parseThemeDraftParam(value: string): ThemeDraft | undefined {
    try {
        const json = value.trimStart().startsWith("{")
            ? value
            : decodeParam(value);
        return parseThemeDraftPayload(JSON.parse(json))?.draft;
    } catch {
        return undefined;
    }
}

function withoutCustomFont(
    selection: FontSelectionId,
    fallback: FontSelectionId,
): FontSelectionId {
    return selection === CUSTOM_FONT_SELECTION ? fallback : selection;
}

export function parseThemeDraftPayload(
    value: unknown,
): ThemeDraftPayload | undefined {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return undefined;
    }

    const payload = value as Partial<ThemeDraftPayload>;
    if (payload.version !== THEME_DRAFT_VERSION) {
        return undefined;
    }

    if (!isThemeDraft(payload.draft)) {
        return undefined;
    }

    return {
        version: THEME_DRAFT_VERSION,
        draft: {
            ...payload.draft,
            customFonts: payload.draft.customFonts ?? {},
            boldTitles: payload.draft.boldTitles ?? false,
            borderRadius:
                payload.draft.borderRadius ?? DEFAULT_BORDER_RADIUS_SCALE_ID,
        },
    };
}

function isThemeDraft(value: unknown): value is ThemeDraft {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return false;
    }

    const draft = value as Partial<ThemeDraft>;

    return (
        typeof draft.colorTokens === "object" &&
        draft.colorTokens !== null &&
        !Array.isArray(draft.colorTokens) &&
        isFontSelectionId(draft.regularFont) &&
        isFontSelectionId(draft.displayFont) &&
        isOptional(draft.customFonts, isCustomFonts) &&
        typeof draft.themeName === "string" &&
        typeof draft.includeDarkMode === "boolean" &&
        isOptional(draft.boldTitles, (value) => typeof value === "boolean") &&
        isOptional(draft.borderRadius, isBorderRadiusScaleId)
    );
}

/**
 * Felter som er kommet til etter at lenker begynte å gå rundt, mangler i de
 * eldre utkastene. De er fortsatt gyldige, og `parseThemeDraftPayload` fyller
 * inn standardverdien. En verdi som *finnes* men er feil kommer derimot fra en
 * lenke noen har endret på, og da forkastes utkastet som ellers.
 */
function isOptional(value: unknown, isValid: (value: unknown) => boolean) {
    return value === undefined || isValid(value);
}
