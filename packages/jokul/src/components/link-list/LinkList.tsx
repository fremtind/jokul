import clsx from "clsx";
import React from "react";
import {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/polymorphism/polymorphism.js";
import { ArrowRightIcon } from "../icon/icons/ArrowRightIcon.js";
import { ItemProps, LinkComponent, LinkListProps } from "./types.js";

const Item: ItemProps = ({ className, ...rest }) => {
    return (
        <li className={clsx("jkl-link-list-item", className)} {...rest}></li>
    );
};

const Link = React.forwardRef(function LinkListLink<
    ElementType extends React.ElementType = "a",
>(
    props: PolymorphicPropsWithRef<ElementType>,
    ref: PolymorphicRef<ElementType>,
) {
    const { as: Component = "a", children, className, ...rest } = props;

    return (
        <Component
            className={clsx("jkl-link-list-link", className)}
            ref={ref}
            {...rest}
        >
            {children}
            <ArrowRightIcon className="jkl-link-list-link__arrow" />
        </Component>
    );
}) as LinkComponent;

export const LinkList = ({
    variant,
    className,
    ...rest
}: LinkListProps): React.JSX.Element => {
    const Component = variant === "ordered" ? "ol" : "ul";

    return (
        <Component
            className={clsx("jkl-link-list", className, {
                "jkl-link-list--ordered": variant === "ordered",
                "jkl-link-list--unordered": variant === "unordered",
            })}
            {...rest}
        />
    );
};

LinkList.Link = Link;
LinkList.Item = Item;
