import { PolymorphicPropsWithRef, PolymorphicRef } from "@fremtind/jkl-core";
import { ArrowRightIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { ComponentProps, FC } from "react";

const Item: FC<ComponentProps<"li">> = ({ className, ...rest }) => {
    return <li className={cn("jkl-link-list-item", className)} {...rest}></li>;
};

type LinkComponent = <ElementType extends React.ElementType = "a">(
    props: PolymorphicPropsWithRef<ElementType>,
) => React.ReactElement | null;

const Link = React.forwardRef(function LinkListLink<
    ElementType extends React.ElementType = "a",
>(
    props: PolymorphicPropsWithRef<ElementType>,
    ref: PolymorphicRef<ElementType>,
) {
    const { as: Component = "a", children, className, ...rest } = props;

    return (
        <Component
            className={cn("jkl-link-list-link", className)}
            ref={ref}
            {...rest}
        >
            {children}
            <ArrowRightIcon className="jkl-link-list-link__arrow" />
        </Component>
    );
}) as LinkComponent;

type UnorderedLinkListProps = React.HTMLAttributes<HTMLUListElement> & {
    variant: "unordered";
};

type OrderedLinkListProps = React.HTMLAttributes<HTMLOListElement> & {
    variant: "ordered";
};

type LinkListProps = UnorderedLinkListProps | OrderedLinkListProps;

export const LinkList = ({
    variant,
    className,
    ...rest
}: LinkListProps): React.JSX.Element => {
    const Component = variant === "ordered" ? "ol" : "ul";

    return (
        <Component
            className={cn("jkl-link-list", className, {
                "jkl-link-list--ordered": variant === "ordered",
                "jkl-link-list--unordered": variant === "unordered",
            })}
            {...rest}
        />
    );
};

LinkList.Link = Link;
LinkList.Item = Item;
