import type { HTMLAttributes, ReactNode } from "react";

export type DescriptionListProps = HTMLAttributes<HTMLDListElement> & {
    /**
     * Visning av elementene i lista
     * @default "horizontal"
     */
    alignment?: "horizontal" | "vertical" | "justified";
    /**
     * Vis skillelinjene mellom elementene i lista
     * @default false
     */
    showSeparators?: boolean;
};

export type DescriptionListItemProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * Tittel/Term som beskrives.
     */
    terms: ReactNode | ReactNode[];
    /**
     * Verdi/Beskrivelse til tittelen.
     */
    details: ReactNode | ReactNode[];
    /**
     * SupportText rendres som et dd-element, og støtter kun et
     * utvalg under-elementer. Les mer om elementene som
     * støttes: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#flow_content.
     */
    supportText?: string | ReactNode;
};
