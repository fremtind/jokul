import type { HTMLAttributes, ReactElement } from "react";

export interface NotificationBadgeProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Antall varsler
     */
    count: number;
    /**
     * Høyeste tall som vises før det blir "+".
     *
     * @default 99
     */
    max?: number;
    /**
     * Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.
     */
    hideCounter?: boolean;
    /**
     * Elementet varselet skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.
     */
    children?: ReactElement<HTMLAttributes<HTMLElement>>;
    /**
     * Dersom du bruker komponenten for noe annet enn "varslinger" kan du endre beskrivelsen av dem.
     * Dette brukes for å gi tilstrekkelig kontekst for tilgjengelighetsverktøy.
     *
     * @example 1 ulest melding / 4 uleste meldinger
     * @example 1 produkt / 4 produkter
     *
     * @default varsel/varsler
     */
    label?: string;
    /**
     * Endrer farge fra kontrastfarge til en rød-farge.
     *
     * @default false
     */
    urgent?: boolean;
}
