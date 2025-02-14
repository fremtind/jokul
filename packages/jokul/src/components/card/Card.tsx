import clsx from "clsx";
import React from "react";
import { AsChildProps } from "../../utilities/polymorphism/as-child.js";
import { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { SlotComponent } from "../../utilities/polymorphism/SlotComponent.js";
import { CardProps } from "./types.js";

type CardComponent = <ElementType extends React.ElementType = "div">(
    props: CardProps<ElementType> & AsChildProps,
) => React.ReactElement | null;

/**
 * En allsidig kortkomponent som brukes for å gruppere innhold på en side.
 * Komponenten rendres til vanlig som en `<div>`, men du kan velge å rendre
 * den som andre elementer eller komponenter der du trenger annen semantikk
 * eller funksjonalitet.
 */
export const Card = React.forwardRef(function Card<
    ElementType extends React.ElementType = "div",
>(props: CardProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        className,
        clickable = false,
        padding = "s",
        variant = "high",
        asChild,
        as = "div",
        ...componentProps
    } = props;

    const Component = asChild ? SlotComponent : as;

    return (
        <Component
            data-testid="jkl-card"
            data-clickable={clickable}
            data-padding={padding}
            className={clsx("jkl-card", `jkl-card--${variant}`, className)}
            {...componentProps}
            ref={ref}
        />
    );
}) as CardComponent;
