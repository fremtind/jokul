import clsx from "clsx";
import React from "react";
import { tokens } from "../../core/index.js";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

type Props = {
    /**
     * Hvor høy Cover-komponenten skal være. Som standard dekker den hele
     * høyden, men du kan sette den lavere, f.eks. hvis du vil "forhånds-
     * vise" deler av innholdet lenger ned på siden.
     * @default "100dvh"
     */
    minHeight?: string;
    /**
     * Avstand mellom det forskjellige innholdet i Cover-komponenten.
     * Kan være nyttig hvis du har flere elementer over/under hoved-
     * innholdet, eller hvis hoverdinnholdet er så høyt at det tar
     * opp hele høyden av skjermen, f.eks. på små skjermer.
     * Du kan bruke `tokens.spacing` for å velge avstand, eller sette gap
     * til `undefined` hvis du ikke ønsker avstand.
     * @default 20
     */
    gap?: keyof typeof tokens.spacing;
    /**
     * Padding for hele komponenten. La være `undefined` hvis du ikke
     * ønsker padding.
     * @default undefined
     */
    padding?: keyof typeof tokens.spacing;
};

export type CoverProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, Props> & Props;

type CoverComponent = <ElementType extends React.ElementType = "div">(
    props: CoverProps<ElementType>,
) => React.ReactElement | null;

/**
 * Lar deg sentrere hovedinnholdet i en blokk vertikalt på siden,
 * samtidig som du har eventuelt annet innhold helt i toppen eller bunnen
 * av blokken. Dette kan være en enkel måte å lage en klassisk layout
 * med toppmeny og footer, eller en stor "hero"-seksjon på en landingsside.
 */
const Cover = React.forwardRef(function Cover<
    ElementType extends React.ElementType = "div",
>(props: CoverProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "div",
        className,
        minHeight = "100dvh",
        gap,
        padding,
        style,
        ...componentProps
    } = props;

    const Component = as;

    return (
        <Component
            data-testid="jkl-cover"
            className={clsx("jkl-cover", className)}
            style={{
                ...style,
                "--min-height": minHeight,
                "--padding": padding ? tokens.spacing[padding] : 0,
                "--gap": gap ? tokens.spacing[gap] : 0,
            }}
            {...componentProps}
            ref={ref}
        />
    );
}) as CoverComponent;

export type ContentProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, Props> & Props;

export type ContentComponent = <ElementType extends React.ElementType = "div">(
    props: ContentProps<ElementType>,
) => React.ReactElement | null;

const Content = React.forwardRef(function Content<
    ElementType extends React.ElementType = "div",
>(props: ContentProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const { as = "div", className, ...componentProps } = props;

    const Component = as;

    return (
        <Component
            data-testid="jkl-cover__content"
            className={clsx("jkl-cover__content", className)}
            {...componentProps}
            ref={ref}
        />
    );
}) as ContentComponent;

const CoverNamespace = Object.assign(Cover, {
    Content,
});

export { CoverNamespace as Cover };
