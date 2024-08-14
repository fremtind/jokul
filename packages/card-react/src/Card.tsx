import {
    type AsChildProps,
    type PolymorphicPropsWithRef,
    type PolymorphicRef,
    SlotComponent,
} from "@fremtind/jkl-core";
import cn from "classnames";
import React from "react";

export const CARD_PADDINGS = ["none", "xs", "s", "m", "l", "xl"] as const;
export type CardPadding = (typeof CARD_PADDINGS)[number];
export const CONTAINER_COLORS = ["default", "high", "low", "subdued"] as const;
export type ContainerColor = (typeof CONTAINER_COLORS)[number];

export type CardProps<ElementType extends React.ElementType> = PolymorphicPropsWithRef<
    ElementType,
    {
        className?: string;
        /**
         * Setter padding på kortet. Tilsvarer samme property i Figma.
         * @default "none"
         */
        padding?: CardPadding;
        /**
         * Setter bakgrunnsfarge på kortet til en av bakgrunnsfargene
         * for "container" i Jøkul.
         * @default "default" (tilsvarer --jkl-color-background-container)
         */
        background?: ContainerColor;
        /**
         * Angir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre
         * kortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra
         * et ruting-bibliotek) og gi det en `href` eller `onClick`-handler.
         */
        clickable?: boolean;
    }
>;

type CardComponent = <ElementType extends React.ElementType = "div">(
    props: CardProps<ElementType> & AsChildProps,
) => React.ReactElement | null;

/**
 * En allsidig kortkomponent som brukes for å gruppere innhold på en side.
 * Komponenten rendres til vanlig som en `<div>`, men du kan velge å rendre
 * den som andre elementer eller komponenter der du trenger annen semantikk
 * eller funksjonalitet.
 */
export const Card = React.forwardRef(function Card<ElementType extends React.ElementType = "div">(
    props: CardProps<ElementType>,
    ref?: PolymorphicRef<ElementType>,
) {
    const {
        className,
        clickable = false,
        padding = "none",
        background = "default",
        asChild,
        as = "div",
        ...componentProps
    } = props;

    const Component = asChild ? SlotComponent : as;

    const style = {
        "--padding": `var(--jkl-card-padding-${padding})`,
        "--background-color":
            background === "default"
                ? "var(--jkl-color-background-container)"
                : `var(--jkl-color-background-container-${background})`,
        ...componentProps.style,
    } as React.CSSProperties;

    return (
        <Component
            data-testid="jkl-card"
            data-clickable={clickable}
            data-padding={padding}
            data-background={background}
            className={cn("jkl-card", className)}
            {...componentProps}
            style={style}
            ref={ref}
        />
    );
}) as CardComponent;
