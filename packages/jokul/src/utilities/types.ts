import type { ReactNode } from "react";
// @ts-ignore Typescript vil klage her dersom ikke tokens er bygget ennå
import type { default as tokens } from "../tokens.js";

// Brukes til å extende props for komponenter som skal støtte data-testautoid ifbm. Test Complete
export interface DataTestAutoId {
    "data-testautoid"?: string;
}

export const BRANDS = ["dnb"] as const;
export type Brand = (typeof BRANDS)[number];
export type Size = "small" | "medium" | "large";
export type ColorScheme = "light" | "dark";

/**
 * Eksplisitte typer for modusene som brukes i Jøkul, slik at de kan brukes aktivt i komponentene
 * @example type Props = { myProp: string } & JokulModes;
 * @example interface Props extends JokulModes { myProp: string };
 */
export interface JokulModes {
    "data-brand"?: Brand;
    "data-size"?: Size;
    "data-theme"?: ColorScheme;
}

export type Easing = keyof typeof tokens.motion.easing;
export type Timing = keyof typeof tokens.motion.timing;

/**
 * Etter React 18 er ikke children lenger en _implicit type_. Tanken er at
 * TypeScript skal kunne oppdage når komponenten forventer children og ikke
 * får det, eller at komponenten blir _gitt_ children men ikke forventer det.
 *
 * Om komponenten din ikke tar i mot children er det i prinsippet ikke noe du
 * trenger å gjøre. Om den derimot tar i mot children bør du spesifisere det.
 * Dersom de er valgfrie (for eksempel om du har en standardverdi) bruker du
 * WithOptionalChildren.
 *
 * @see WithOptionalChildren
 * @see https://solverfox.dev/writing/no-implicit-children/
 */
export interface WithChildren {
    children: ReactNode | ReactNode[];
}

/**
 * Etter React 18 er ikke children lenger en _implicit type_. Tanken er at
 * TypeScript skal kunne oppdage når komponenten forventer children og ikke
 * får det, eller at komponenten blir _gitt_ children men ikke forventer det.
 *
 * Om komponenten din ikke tar i mot children er det i prinsippet ikke noe du
 * trenger å gjøre. Om den derimot tar i mot children bør du spesifisere det.
 *
 * Om du alltid forventer å få children, bruk WithChildren.
 *
 * @see WithChildren
 * @see https://solverfox.dev/writing/no-implicit-children/
 */
export interface WithOptionalChildren {
    children?: ReactNode | ReactNode[];
}

/**
 * @see WithReadOnly
 */
export interface WithDisabled {
    /**
     * Deaktiverer kontrollen.
     *
     * Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
     * forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
     * og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
     * tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
     * kravet med `description` eller `errorLabel`.
     */
    disabled?: boolean;
}

/**
 * @see WithDisabled
 */
export interface WithReadOnly {
    /**
     * Gjør kontrollen uredigerbar. Verdien beholder full tekstkontrast, og feltet
     * kan fortsatt fokuseres og kopieres fra.
     *
     * Bruk den bare i interne verktøy, aldri i kundeflyter. Kunden får ikke vite
     * hvorfor feltet er låst eller hva som må til for å endre det. Skal en verdi
     * bare vises i en kundeflyt, vis den som tekst framfor som et låst skjemafelt.
     */
    readOnly?: boolean;
}
