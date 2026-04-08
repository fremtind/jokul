import type { TextareaHTMLAttributes } from "react";
import type { InputGroupProps } from "../input-group/types.js";

export type CounterStrategy = "characters" | "bytes";

export type Counter = {
    /**
     * Maksverdi for telleren.
     *
     * Enheten avhenger av `strategy`:
     * - `"characters"`: antall tegn
     * - `"bytes"`: antall UTF-8-bytes
     */
    maxLength: number;
    /**
     * Bestemmer hva telleren måler.
     *
     * - "characters" teller tekst på samme måte som i dag og er standard
     * - "bytes" teller antall UTF-8-bytes, for usecaser der backend eller API
     *   håndhever en bytegrense
     *
     * Unngå å kombinere `strategy="bytes"` med native `maxLength` på
     * `<textarea>`, siden nettleseren fortsatt håndhever `maxLength` som tegn.
     *
     * @default "characters"
     */
    strategy?: CounterStrategy;
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
    /** Sett antall rader skjemafeltet ekspanderes til ved focus. Innholdet scroller om feltet fylles med mer innhold enn det er plass til. */
    rows?: number;
    inline?: boolean;
    startOpen?: boolean;
    /** Gjør så skjemafeltet ekspanderer seg til å vise alt innhold i stedet for å scrolle */
    autoExpand?: boolean;
}

export interface TextAreaProps
    extends Omit<InputGroupProps, "children">,
        BaseTextAreaProps {}
