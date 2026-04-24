import type { PolymorphicPropsWithRef } from "../../utilities/index.js";

export type TextElement =
    | "p"
    | "span"
    | "label"
    | "legend"
    | "small"
    | "strong"
    | "em"
    | "code"
    | "kbd"
    | "samp"
    | "var";

export type TitleElement =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "legend";

export type TextSize = "xs" | "s" | "m" | "l";

export type TitleSize = "xs" | "s" | "m" | "l" | "xl";

type TextOwnProps = {
    /**
     * Visuell størrelse på teksten. Tilsvarer font-size-tokens i Jøkul.
     * @default "m"
     */
    size?: TextSize;
    /**
     * Uthever teksten (font-weight: bold).
     * @default false
     */
    bold?: boolean;
    /**
     * Setter mindre linjehøyde — bruk når teksten i all hovedsak går over
     * én linje (f.eks. i tabellceller eller knapper).
     * @default false
     */
    short?: boolean;
    /**
     * Skjuler elementet visuelt, men beholder det for skjermlesere.
     * Bruk for å gi ekstra kontekst til assistive teknologier uten å
     * påvirke det visuelle.
     * @default false
     */
    srOnly?: boolean;
};

type TitleOwnProps = {
    /**
     * Visuell størrelse på tittelen. Frakoblet fra `as` — velg semantisk
     * nivå via `as`, og visuell størrelse via `size`.
     * @default "l"
     */
    size?: TitleSize;
    /**
     * Skjuler elementet visuelt, men beholder det for skjermlesere.
     * Bruk for å beholde riktig overskrifts-hierarki i skjermlesere
     * uten å vise tittelen visuelt.
     * @default false
     */
    srOnly?: boolean;
};

export type TextProps<As extends TextElement = "p"> = PolymorphicPropsWithRef<
    As,
    TextOwnProps
>;

export type TitleProps<As extends TitleElement = "h2"> =
    PolymorphicPropsWithRef<As, TitleOwnProps>;
