import type { HTMLAttributes } from "react";

export type DescriptionListProps = HTMLAttributes<HTMLDListElement> & {
    /**
     * Alltid vis value til høyre
     * @default false
     */
    alwaysJustified: boolean;
};

export type DescriptionListItemProps = Omit<
    HTMLAttributes<HTMLDivElement>,
    "className"
> & {
    title: string;
    value: string;
    description?: string;
};
