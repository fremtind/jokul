import type { HTMLAttributes } from "react";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";
import type { WithTracking } from "../cookie-consent/types.js";

export type LinkListProps = HTMLAttributes<HTMLUListElement> & {
    label: string;
    hideLabel?: boolean;
    outlined?: boolean;
};

export type LinkListLinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, WithTracking>;

export type LinkListLinkComponent = <
    ElementType extends React.ElementType = "a",
>(
    props: LinkListLinkProps<ElementType>,
) => React.ReactElement | null;
