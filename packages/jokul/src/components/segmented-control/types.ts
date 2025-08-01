import type { InputHTMLAttributes } from "react";

export type SegmentedControlProps = InputHTMLAttributes<HTMLInputElement> & {
    /**
     * OBS: Bruk en god tittel på valgene, ikke på innholdet det kontrollerer.
     */
    title: string;
    /**
     * Vis eller skjul tittel visuelt. Den er alltid tilgjengelig for skjermlesere.
     */
    showTitle?: boolean;
    items: string[];
    /**
     * Hvis du ønsker å separere et enkelt valg kan du det.
     * Dersom du setter dette til et negativt tall vil du også kunne separere alle fra hverandre.
     * */
    seperateItem?: number;
};
