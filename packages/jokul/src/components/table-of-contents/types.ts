import type { HTMLAttributes } from "react";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";
import type { WithTracking } from "../cookie-consent/types.js";

export type TableOfContentsProps = HTMLAttributes<HTMLOListElement> & {
    label: string;
};

export type TableOfContentsLinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, WithTracking>;

export type TableOfContentsLinkComponent = <
    ElementType extends React.ElementType = "a",
>(
    props: TableOfContentsLinkProps<ElementType>,
) => React.ReactElement | null;
