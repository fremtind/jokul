import type { HTMLAttributes } from "react";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type TableOfContentsProps = HTMLAttributes<HTMLOListElement> & {
    label: string;
};

export type TableOfContentsLinkComponent = <
    ElementType extends React.ElementType = "a",
>(
    props: PolymorphicPropsWithRef<ElementType>,
) => React.ReactElement | null;
