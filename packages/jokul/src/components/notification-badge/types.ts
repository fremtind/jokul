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
     * Teksten skjermlesere får, og tittelen på ankeret. Brukes ordrett, slik du
     * sender den inn.
     *
     * Antallet vises bare visuelt, så dette er eneste sted skjermlesere kan få
     * det. Ta det med i strengen, og hold den i takt med `count`.
     *
     * @example `${antallMeldinger} uleste meldinger`
     * @example "4 produkter"
     *
     * @default varsler
     */
    label?: string;
    /**
     * Endrer farge fra kontrastfarge til en rød-farge.
     *
     * @default false
     */
    urgent?: boolean;
}
