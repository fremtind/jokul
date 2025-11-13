import type { HTMLAttributes } from "react";

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

export type DescriptionListItemProps = Omit<
    HTMLAttributes<HTMLDivElement>,
    "className"
> & {
    title: string;
    value: string;
    supportText?: string;
};
