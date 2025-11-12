import type { HTMLAttributes } from "react";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type LinkListProps = HTMLAttributes<HTMLUListElement> & {
    label: string;
    /**
     * Brukes for å vise navnet på lista
     * @default false
     */
    showLabel?: boolean;
};

export type LinkListLinkComponent = <
    ElementType extends React.ElementType = "a",
>(
    props: PolymorphicPropsWithRef<ElementType>,
) => React.ReactElement | null;
