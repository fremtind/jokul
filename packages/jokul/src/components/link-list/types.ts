import type { HTMLAttributes } from "react";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type LinkListProps = HTMLAttributes<HTMLOListElement> & {
    label: string;
    variant: "unordered" | "ordered";
};

export type LinkComponent = <ElementType extends React.ElementType = "a">(
    props: PolymorphicPropsWithRef<ElementType>,
) => React.ReactElement | null;
