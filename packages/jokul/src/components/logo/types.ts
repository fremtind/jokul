import type { CSSProperties } from "react";
import type { WithChildren } from "../../core/types.js";

export interface LogoProps {
    className?: string;
    id?: string;
    style?: CSSProperties;
    /** Sentrerer logosymbolet i viewboksen i stedet for den vanlige venstrejusteringen */
    centered?: boolean;
    /** Animerer overgangen mellom logo og logosymbol */
    animated?: boolean;
    /** Vis logosymbol i stedet for logo */
    isSymbol?: boolean;
    /** Beskrivelse av logoen tilgjengelig for skjermlesere */
    title?: string;
}

export interface LogoStampProps extends WithChildren {
    className?: string;
    id?: string;
    style?: CSSProperties;
    /**
     * Beskrivelse av logostempelet tilgjengelig for skjermlesere.
     * Teksten i logostempelet er en path, og ikke tilgjengelig for skjermlesere.
     * @default "Forsikring levert av Fremtind"
     */
    title?: string;
    /** Roterer teksten rundt logostempelet første gangen stempelet kommer til syne */
    animated?: boolean;
}
