import type { HTMLAttributes } from "react";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type LinkListProps = HTMLAttributes<HTMLUListElement> & {
    label: string;
    hideLabel?: boolean;
};

export type LinkListLinkComponent = <
    ElementType extends React.ElementType = "a",
>(
    props: PolymorphicPropsWithRef<ElementType>,
) => React.ReactElement | null;
