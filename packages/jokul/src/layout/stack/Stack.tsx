import clsx from "clsx";
import React from "react";
import { tokens } from "../../core/index.js";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

type Props = {
    /**
     * Spacing-steget som skal brukes som avstand mellom innholdsblokkene.
     * Standard er unit.20, som tilsvarer 16px.
     * @default 30
     */
    gap?: keyof typeof tokens.unit;
    /**
     * lager automatisk avstand også mellom innhold inni nøstede elementer
     * inne i Stack. Dette sørger for jevn fordeling av innholdet selv om
     * du trenger å lage flere nivåer med innhold.
     * @default false
     */
    recursive?: boolean;
};

export type StackProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, Props> & Props;

type StackComponent = <ElementType extends React.ElementType = "div">(
    props: StackProps<ElementType>,
) => React.ReactElement | null;

export const Stack = React.forwardRef(function Stack<
    ElementType extends React.ElementType = "div",
>(props: StackProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "div",
        className,
        gap,
        recursive = false,
        style,
        ...componentProps
    } = props;

    const Component = as;

    return (
        <Component
            data-testid="jkl-stack"
            data-recursive={recursive}
            className={clsx("jkl-stack", className)}
            style={{
                ...style,
                "--gap": gap ? tokens.unit[gap] : 0,
            }}
            {...componentProps}
            ref={ref}
        />
    );
}) as StackComponent;
