import type { RefObject } from "react";
import type { Easing, Timing } from "../../core/types.js";

export interface UseAnimatedHeightOptions<T extends HTMLElement = HTMLElement> {
    display?: "block" | "grid" | "flex";
    /**
     * Overstyr standard easingfunksjon
     * @default "standard"
     */
    easing?: Easing;
    /**
     * Overstyr standard timing
     * @default "productive"
     */
    timing?: Timing;
    onTransitionStart?: (isOpening: boolean, ref: RefObject<T>) => void;
    /**
     * Kalles rett etter at elementet har fått display: block; i stedet for hidden;
     * Nyttig om du må flytte fokus inn i elementet og ikke vil vente til animasjonen er ferdig.
     * Her er ikke innholdet _visuelt_ synlig ennå, men det er "synlig" for DOM i den
     * forstand at det _ikke_ er display: hidden;
     *
     * `isOpen` er alltid `true`. Det sendes som første parameter for å ha lik funksjonssignatur som `onTransitionEnd`.
     */
    onFirstVisible?: (isOpen: boolean, ref: RefObject<T>) => void;
    onTransitionEnd?: (isOpen: boolean, ref: RefObject<T>) => void;
}
