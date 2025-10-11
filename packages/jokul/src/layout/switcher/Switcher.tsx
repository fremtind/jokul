import clsx from "clsx";
import React from "react";
import { tokens } from "../../core/index.js";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

type Props = {
    /**
     * En CSS-lengde som definerer den minste bredden Switcher
     * kan ha før innholdet brytes til vertikal layout.
     * Standard er 65ch, eller omtrent anbefalt linjelengde for
     * vanlige avsnitt.
     * @default 65ch
     */
    treshold?: string;
    /**
     * Spacing-steget som skal brukes som avstand mellom innholdsblokkene.
     * Standard er unit.20, som tilsvarer 16px.
     * @default 20
     */
    gap?: keyof typeof tokens.spacing;
    /**
     * Spacing-steget som skal brukes som padding rundt innholdsblokkene.
     * @default 0
     */
    padding?: keyof typeof tokens.spacing;
    /**
     * Maksimalt antall elementer som vil vises ved siden av hverandre.
     * Hvis det er fler elementer enn dette, vil alle elementene vises i en kolonne.
     * Du kan velge mellom 2, 3 eller 4 elementer.
     * @default 3
     */
    maxElements?: number;
    /**
     * Lar elementene ta opp plassen de trenger, i stedet for å vokse til å
     * fylle sin del av bredden, og justerer innholdet til starten eller
     * slutten av beholderen. Hvis du lar denne står tom tar elementene opp
     * like store deler av beholderen.
     */
    justifyContent?: "start" | "end";
};

export type SwitcherProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, Props> & Props;

type SwitcherComponent = <ElementType extends React.ElementType = "div">(
    props: SwitcherProps<ElementType>,
) => React.ReactElement | null;

/**
 * Switcher er en komponent som lar deg vise elementer ved
 * siden av hverandre, frem til en gitt bredde hvor alle
 * elementene vil brekke til å vises i en kolonne.
 *
 * Du kan også velge hvor mange elementer som maksimalt kan
 * vises ved siden av hverandre. Sendes det inn flere elementer
 * enn dette, vil alle elementene vises i en kolonne uavhengig
 * av bredde.
 */
export const Switcher = React.forwardRef(function Switcher<
    ElementType extends React.ElementType = "div",
>(props: SwitcherProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "div",
        className,
        treshold = "30rem",
        gap = 16,
        padding,
        maxElements = 3,
        justifyContent,
        style,
        ...componentProps
    } = props;

    const Component = as;

    return (
        <Component
            data-testid="jkl-switcher"
            className={clsx("jkl-switcher", className)}
            data-max-elements={maxElements}
            data-justify-content={justifyContent}
            style={{
                ...style,
                "--treshold": treshold,
                "--gap": tokens.spacing[gap],
                "--padding": padding ? tokens.spacing[padding] : 0,
            }}
            {...componentProps}
            ref={ref}
        />
    );
}) as SwitcherComponent;
