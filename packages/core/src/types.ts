import { ReactNode } from "react";

// Brukes til å extende props for komponenter som skal støtte data-testautoid ifbm. Test Complete
export interface DataTestAutoId {
    "data-testautoid"?: string;
}

export type LabelVariant = "small" | "medium" | "large";

export type ColorScheme = "light" | "dark";

export type ValuePair = {
    value: string;
    label: string;
};

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
    children: ReactNode;
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
    children?: ReactNode;
}
