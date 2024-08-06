import { PolymorphicPropsWithRef, PolymorphicRef } from "@fremtind/jkl-core";
import { ArrowRightIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React from "react";

type LinkListLinkComponent = <ElementType extends React.ElementType = "a">(
    props: PolymorphicPropsWithRef<ElementType>,
) => React.ReactElement | null;

export const LinkListLink = React.forwardRef(function LinkListLink<ElementType extends React.ElementType = "a">(
    props: PolymorphicPropsWithRef<ElementType>,
    ref: PolymorphicRef<ElementType>,
) {
    const { as = "a", children, className, ...rest } = props;
    const Component = as;

    return (
        <Component className={cn("jkl-link-list-link", className)} ref={ref} {...rest}>
            {children}
            <ArrowRightIcon className="jkl-link-list-link__arrow" />
        </Component>
    );
}) as LinkListLinkComponent;
