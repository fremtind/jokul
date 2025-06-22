import clsx from "clsx";
import React from "react";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

export type ProseProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType>;

type ProseComponent = <ElementType extends React.ElementType = "div">(
    props: ProseProps<ElementType>,
) => React.ReactElement | null;

/**
 * Prose-komponenten brukes for å formatere tekstinnhold på en lesbar måte.
 * Det settes automatisk fornuftige stiler for overskrifter, avsnitt, kode,
 * og andre vanlige typografiske elementer.
 */
export const Prose = React.forwardRef(function Prose<
    ElementType extends React.ElementType = "div",
>(props: ProseProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "div",
        className,
        gap,
        recursive = false,
        ...componentProps
    } = props;

    const Component = as;

    return (
        <Component
            data-testid="jkl-prose"
            className={clsx("jkl-prose", className)}
            {...componentProps}
            ref={ref}
        />
    );
}) as ProseComponent;
