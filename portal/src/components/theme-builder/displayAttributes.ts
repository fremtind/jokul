import { THEME_MODES } from "./tokens";

/**
 * Liste over støttede merker, utledet fra brand-token-mappa
 * `packages/jokul/src/tokens/brands/`.
 *
 * `jokul` er base-merket og leveres uten separat JSON. Øvrige merker hentes
 * via webpack `require.context` på `color.<brand>.tokens.json`-filene, så
 * lista holdes automatisk i synk med hvilke merker som er definert i JSON.
 * Legges en ny `color.foo.tokens.json` til, dukker `foo` opp her — uten
 * koderedigering.
 */
const BRANDS: readonly string[] = (() => {
    const jokul = "jokul";
    try {
        const ctx = (
            require as unknown as {
                context: (
                    dir: string,
                    deep: boolean,
                    pattern: RegExp,
                ) => { keys: () => string[] };
            }
        ).context(
            "../../../../packages/jokul/src/tokens/brands",
            false,
            /^\.\/color\.[\w-]+\.tokens\.json$/,
        );
        const derived = ctx
            .keys()
            .map((key) => key.match(/color\.([\w-]+)\.tokens\.json$/)?.[1])
            .filter((value): value is string => Boolean(value))
            .filter((brand) => brand !== jokul)
            .sort();
        return [jokul, ...derived];
    } catch {
        // require.context er ikke tilgjengelig (f.eks. ved typecheck uten
        // webpack). Fall tilbake til den kjente lista — den dekker dagens
        // merker, og build-en vil uansett feile hvis noen JSON-fil mangler
        // siden `transpilePackages` krever at de finnes.
        return [jokul, "dnb", "eika", "sparebank1"];
    }
})();

/**
 * Register over `data-*`-attributter som styrer visningen, og som theme-builder
 * eksponerer via popoveren over workspace-en.
 *
 * Legg til en ny attributt her, så dukker den opp som en kontroll automatisk.
 * `key` blir det rendrede `data-<key>`-attributtet, og {@link DisplayState}
 * utledes fra denne lista.
 *
 * Hvor verdiene kommer fra er opp til hver entry: theme speiler
 * {@link THEME_MODES} (utledet fra `color.tokens.json`), brand utledes fra
 * `tokens/brands/`-mappa, og size er CSS-data-attributter som ikke har
 * en JSON-kilde — de matcher Jøkuls `[data-size]`-stiler.
 */
export const DATA_ATTRIBUTES = [
    {
        key: "theme",
        label: "Color theme",
        values: THEME_MODES as readonly string[],
        default: THEME_MODES[0] as string,
    },
    {
        key: "brand",
        label: "Brand",
        values: BRANDS,
        default: BRANDS[0],
    },
    {
        key: "size",
        label: "Size",
        values: ["small", "medium", "large"] as readonly string[],
        default: "medium",
    },
] as const satisfies readonly {
    key: string;
    label: string;
    values: readonly string[];
    default: string;
}[];

export type DisplayAttributeKey = (typeof DATA_ATTRIBUTES)[number]["key"];

/** Aktivt valg per data-attributt. */
export type DisplayState = Record<DisplayAttributeKey, string>;

/** Starttilstand — `default`-verdien for hver attributt. */
export const DEFAULT_DISPLAY_STATE: DisplayState = Object.fromEntries(
    DATA_ATTRIBUTES.map((attr) => [attr.key, attr.default]),
) as DisplayState;

/**
 * Bygger `data-*`-objektet som skal spredes på wrapper-elementet, slik at
 * etterkommerne (Jøkul-stiler) plukker opp gjeldende valg.
 */
export function dataAttributes(state: DisplayState): Record<string, string> {
    return Object.fromEntries(
        Object.entries(state).map(([key, value]) => [`data-${key}`, value]),
    );
}
