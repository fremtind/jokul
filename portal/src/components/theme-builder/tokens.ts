/**
 * Eneste sannhetskilde for theme-builder-strukturen.
 *
 * Alt som vises i UI-et — variant-faner, editor-seksjoner og kontrast-sjekker
 * — utledes herfra fra `color.tokens.json`. Legger du til en variant, gruppe
 * eller rolle i JSON-en dukker den opp automatisk; ingen andre filer skal
 * gripe direkte inn i JSON-strukturen.
 *
 * # Kontrakter med JSON-strukturen
 *
 * Theme-builder forventer at `color.tokens.json` følger disse konvensjonene:
 *
 * - **Variant-nivå**: hver variant (f.eks. `neutral`, `accent`) inneholder de
 *   samme gruppene. Meta-nøkkelen `type` på variantnivå filtreres bort.
 * - **Gruppenavn**: minst `background`, `text` og `border` — kontrast-logikken
 *   ({@link contrastReference}) refererer til disse navnene direkte.
 * - **Rolle-paring**: `text.on-X` antas å være forgrunn for `background.X`
 *   (f.eks. `text.on-action` på `background.action`).
 * - **Surface-rolle**: hvis `background.page` finnes brukes den som dominant
 *   flate for kontrast-måling, ellers første rolle i `background`-gruppa.
 * - **Theme-modus**: hvert token har et `value`-objekt med (typisk)
 *   `light`/`dark` — modusene utledes fra et tilfeldig token og brukes
 *   konsistent overalt via {@link THEME_MODES}.
 *
 * Disse konvensjonene er bevisste — de utgjør "API-en" mellom JSON og UI.
 */
import schema from "../../../../packages/jokul/src/tokens/color.tokens.json";

type Schema = typeof schema;
type ColorMap = Schema["color"];

/** En toppnivå-fargevariant (`neutral`, `accent`, `info`, …). */
export type ColorVariant = Exclude<keyof ColorMap, "type"> & string;
/** En gruppe innenfor en variant (`background`, `text`, `border`). */
export type ColorGroup = {
    [V in ColorVariant]: keyof ColorMap[V];
}[ColorVariant] &
    string;
/** En spesifikk rolle innenfor en gruppe (`page`, `default`, `on-action`, …). */
export type ColorRole = {
    [V in ColorVariant]: {
        [G in keyof ColorMap[V]]: keyof ColorMap[V][G];
    }[keyof ColorMap[V]];
}[ColorVariant] &
    string;

/**
 * Nøklene i `value`-objektet på hvert token (`light`, `dark`). Utledes fra én
 * konkret sti i JSON-en — strukturen er ensartet, så alle stier gir samme form.
 */
type SampleValue = Schema["color"][Exclude<
    keyof Schema["color"],
    "type"
>] extends infer V
    ? V[keyof V] extends infer G
        ? G[keyof G] extends infer N
            ? N extends { value: infer Val }
                ? Val
                : never
            : never
        : never
    : never;
export type ThemeMode = keyof SampleValue & string;
export type EditorMode = "visual" | "json";
export type ContrastRequirementId = "text" | "ui";

/** Flat representasjon av ett token — alt editoren trenger for å vise og redigere det. */
export type ColorToken = {
    variant: ColorVariant;
    group: ColorGroup;
    role: ColorRole;
} & Record<ThemeMode, string>;

type ColorTokenNode = { value: Record<ThemeMode, string> };
export type ColorSchemeJson = {
    color: { type: "colorScheme" } & {
        [V in ColorVariant]: {
            [G in ColorGroup]: Record<string, ColorTokenNode>;
        };
    };
};

/** Identifiserer et token via sin posisjon i strukturen, uten verdier. */
export type RoleEntry = {
    variant: ColorVariant;
    group: ColorGroup;
    role: ColorRole;
};

/** Stabil strengnøkkel for en token-referanse — brukes for oppslag og React-keys. */
export const tokenKey = (t: RoleEntry): string =>
    `${t.variant}.${t.group}.${t.role}`;

// --- Iterasjon over JSON-strukturen ---

/** Varianter i `color.tokens.json`, med meta-nøkkelen `type` filtrert bort. */
export const COLOR_VARIANTS = Object.keys(schema.color).filter(
    (key) => key !== "type",
) as ColorVariant[];

/** Alle (variant, group, role)-tripler i strukturen, i JSON-rekkefølge. */
export const ROLE_ENTRIES: RoleEntry[] = COLOR_VARIANTS.flatMap((variant) =>
    Object.entries(
        schema.color[variant] as unknown as Record<
            string,
            Record<string, unknown>
        >,
    ).flatMap(([group, roles]) =>
        Object.keys(roles).map((role) => ({
            variant,
            group: group as ColorGroup,
            role: role as ColorRole,
        })),
    ),
);

/** Rollene som finnes i hver gruppe, deduplikert på tvers av varianter. */
export const COLOR_ROLES = ROLE_ENTRIES.reduce(
    (acc, { group, role }) => {
        acc[group] ??= [];
        if (!acc[group].includes(role)) acc[group].push(role);
        return acc;
    },
    {} as Record<ColorGroup, ColorRole[]>,
);

/** Theme-modusene (`light`, `dark`) lest av `value`-objektet på et tilfeldig token. */
export const THEME_MODES: ThemeMode[] = (() => {
    const sample = ROLE_ENTRIES[0];
    const node = (
        schema.color as unknown as Record<
            string,
            Record<string, Record<string, ColorTokenNode>>
        >
    )[sample.variant][sample.group][sample.role];
    return Object.keys(node.value) as ThemeMode[];
})();

// --- Toveis konvertering mellom strukturen og redigerbare tokens ---

/** Bygger redigerbare `ColorToken[]` fra JSON-strukturen (default: pakka JSON). */
export function tokensFromSchema(
    source: ColorSchemeJson = schema as unknown as ColorSchemeJson,
): ColorToken[] {
    return ROLE_ENTRIES.map(({ variant, group, role }) => {
        const value = source.color[variant]?.[group]?.[role]?.value;
        const modes = Object.fromEntries(
            THEME_MODES.map((mode) => [mode, value?.[mode] ?? ""]),
        ) as Record<ThemeMode, string>;
        return { variant, group, role, ...modes };
    });
}

/** Inversen av {@link tokensFromSchema} — brukes til eksport og JSON-redigering. */
export function tokensToSchema(tokens: ColorToken[]): ColorSchemeJson {
    const color = { type: "colorScheme" } as ColorSchemeJson["color"];
    for (const t of tokens) {
        color[t.variant] ??= {} as ColorSchemeJson["color"][ColorVariant];
        color[t.variant][t.group] ??= {};
        const value = Object.fromEntries(
            THEME_MODES.map((mode) => [mode, t[mode]]),
        ) as Record<ThemeMode, string>;
        color[t.variant][t.group][t.role] = { value };
    }
    return { color };
}
