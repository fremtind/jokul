import type { TextareaHTMLAttributes } from "react";
import type { InputGroupProps } from "../input-group/types.js";

export type Counter = {
    /** Antall tegn før telleren når maksimum og vi viser en feilmelding */
    maxLength: number;
    /**
     * Med teller vises en progress-bar i bunnen av tekstfeltet som krymper
     * ned fra 100% (null tegn skrevet) til 0% (maks antall tegn skrevet).
     * Om du vil skjule den, sett denne propen til true.
     *
     * @default false
     */
    hideProgress?: boolean;
};

export interface BaseTextAreaProps
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children"> {
    /**
     * Viser en teller i tekstfeltet når det har fokus.
     */
    counter?: Counter;
    /** Definerer antall synlige linjer som bestemmer tekstfeltets høyde */
    rows?: number;
    inline?: boolean;
    /** @deprecated Ikke lenger i bruk, ettersom tekstfeltet ikke lenger animeres ved fokus. `startOpen` vil bli fjernet i en senere release. */
    startOpen?: boolean;
    /** Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle */
    autoExpand?: boolean;
}

export interface TextAreaProps
    extends Omit<InputGroupProps, "children">,
        BaseTextAreaProps {}
