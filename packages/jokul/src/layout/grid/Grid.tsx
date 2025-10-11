import clsx from "clsx";
import React from "react";
import { tokens } from "../../core/index.js";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

type Props = {
    /**
     * En CSS-lengde som definerer den minste bredden hvert element
     * i grid-et kan ha før Grid vil fjerne en kolonne for å gjøre
     * mer plass. F.eks. vil et grid med `minElementWidth` på 250px,
     * som er 750px bredt (pluss plass til spacing og padding), vise
     * 3 elementer per rad. Hvis bredden reduseres under dette vil
     * grid-et bytte til å vise 2 elementer per rad, osv.
     * @default 20ch
     */
    minElementWidth?: string;
    /**
     * Spacing-steget som skal brukes som avstand mellom innholdsblokkene.
     * Standard er spacing.16, som tilsvarer 16px.
     * @default 16
     */
    gap?: keyof typeof tokens.spacing;
    /**
     * Spacing-steget som skal brukes som padding rundt innholdsblokkene.
     * @default 0
     */
    padding?: keyof typeof tokens.spacing;
};

export type GridProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, Props> & Props;

type GridComponent = <ElementType extends React.ElementType = "div">(
    props: GridProps<ElementType>,
) => React.ReactElement | null;

/**
 * Grid lar deg vise elementer i et rutenett, der hvert element
 * tar opp samme bredde. Du kan sette minimumsbredden et
 * element kan ha, og komponenten vil automatisk tilpasse
 * antall kolonner basert på bredden til rutenettet. Dette gjør
 * at du kan vise flere elementer side om side på større
 * skjermer, og færre elementer på mindre skjermer.
 */
export const Grid = React.forwardRef(function Grid<
    ElementType extends React.ElementType = "div",
>(props: GridProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "div",
        className,
        minElementWidth = "20ch",
        gap = 16,
        padding,
        style,
        ...componentProps
    } = props;

    const Component = as;

    return (
        <Component
            data-testid="jkl-grid"
            className={clsx("jkl-grid", className)}
            style={{
                ...style,
                "--min-element-width": minElementWidth,
                "--gap": tokens.spacing[gap],
                "--padding": padding ? tokens.spacing[padding] : 0,
            }}
            {...componentProps}
            ref={ref}
        />
    );
}) as GridComponent;
