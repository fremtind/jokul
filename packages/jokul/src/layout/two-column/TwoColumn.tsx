import clsx from "clsx";
import React from "react";
import { tokens } from "../../core/index.js";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

type Props = {
    /**
     * En CSS-lengde som definerer den minste bredden innholdet kan ha
     * før layouten brekker ned til en kolonne. Som standard er den satt
     * til 50 %, som vil si at sidebar-en aldri vil ta opp mer enn halve
     * bredden av skjermen.
     * @default "50%"
     */
    minContentWidth?: string;
    /**
     * Du kan velge å legge inn avstand mellom sidepanel og innholdet, men
     * vi anbefaler å heller bruke andre layout-komponenter med padding
     * når du bygger sidepanel og innhold for å oppnå ønsket avstand.
     * @default undefined
     */
    gap?: keyof typeof tokens.spacing;
};

export type TwoColumnProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, Props> & Props;

type TwoColumnComponent = <ElementType extends React.ElementType = "div">(
    props: TwoColumnProps<ElementType>,
) => React.ReactElement | null;

export const TwoColumn = React.forwardRef(function TwoColumn<
    ElementType extends React.ElementType = "div",
>(props: TwoColumnProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "div",
        className,
        minContentWidth = "50%",
        gap,
        style,
        ...componentProps
    } = props;

    const Component = as;

    return (
        <Component
            data-testid="jkl-two-column"
            className={clsx("jkl-two-column", className)}
            style={{
                ...style,
                "--min-content-width": minContentWidth,
                "--gap": gap ? tokens.spacing[gap] : 0,
            }}
            {...componentProps}
            ref={ref}
        />
    );
}) as TwoColumnComponent;
