import type { HTMLAttributes, ReactNode } from "react";

export type CarouselProps = Omit<
    HTMLAttributes<HTMLUListElement>,
    "children"
> & {
    /**
     * Ulike typer for navigering i karusellen
     *
     * @default "both"
     */
    controls?: "none" | "arrows" | "numbers" | "both";
    /**
     * Bestemmer hvor elementene skal plasseres ved scroll-snapping.
     *
     * @default "center"
     */
    scrollSnapAlign?: "none" | "start" | "end" | "center";
    /**
     * Bestemmer hvor streng karusellen er på scroll-snapping.
     *
     * @default "mandatory"
     */
    scrollSnapType?: "mandatory" | "proximity" | "none";
    /**
     * Gjør det mulig å skjule scrollbaren i karusellen. Bruk med omhu.
     *
     * @default false
     */
    hideScrollbar?: boolean;
    children: ReactNode | ReactNode[];
};
