import { ComponentProps, FC } from "react";
import { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type UnorderedLinkListProps = React.HTMLAttributes<HTMLUListElement> & {
    variant: "unordered";
};

export type OrderedLinkListProps = React.HTMLAttributes<HTMLOListElement> & {
    variant: "ordered";
};

export type LinkListProps = UnorderedLinkListProps | OrderedLinkListProps;

export type LinkComponent = <ElementType extends React.ElementType = "a">(
    props: PolymorphicPropsWithRef<ElementType>,
) => React.ReactElement | null;

export type ItemProps = FC<ComponentProps<"li">>;
