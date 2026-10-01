import clsx from "clsx";
import React from "react";
import { SlotComponent } from "../../utilities/polymorphism/SlotComponent.js";
import type { AsChildProps } from "../../utilities/polymorphism/as-child.js";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { CardProps } from "./types.js";

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
        outlined = false,
        asChild,
        as = "div",
        children,
        tracking,
        ...componentProps
    } = props;

    const Component = asChild ? SlotComponent : as;
    const trackingLabel = children ? String(children) : undefined;

    return (
        <Component
            data-testid="jkl-card"
            data-clickable={clickable}
            data-padding={padding}
            className={clsx(
                "jkl-card",
                outlined && "jkl-card--outlined",
                className,
            )}
            {...componentProps}
            data-track-component-name={COMPONENT_NAMES.Card}
            data-track-id={tracking?.id ?? trackingLabel}
            data-track-label={trackingLabel}
            data-track-padding={padding}
            data-track-outlined={outlined}
            data-track-clickable={clickable}
            {...getExtraTrackingAttributes(tracking?.extra)}
            ref={ref}
        >
            {children}
        </Component>
    );
}) as CardComponent;
