import clsx from "clsx";
import type { ElementType } from "react";
import type { Polymorphic } from "../../utilities/index.js";
import { SlotComponent } from "../../utilities/polymorphism/SlotComponent.js";
import type { AsChildProps } from "../../utilities/polymorphism/as-child.js";
import type { CardPadding, CardVariant } from "./types.js";

export type CardProps = {
    padding?: CardPadding;
    /**
     * Angir hvilken kortvariant du vil bruke. Velg en variant som gir god kontrast
     * til bakgrunnen på siden, slik at det er enkelt å skille innholdet fra hverandre.
     * @default "high"
     */
    variant?: CardVariant;
    /**
     * Angir om kortet visuelt skal fremstå som klikkbart. Du må selv rendre
     * kortet som et klikkbart element (f.eks. `<a>` eller en `<Link>` fra
     * et ruting-bibliotek) og gi det en `href` eller `onClick`-handler.
     * HUSK: Sett aria-label for at støtteverktøy, som skjermlesere, ikke
     * skal lese alt innholdet i kortet.
     */
    clickable?: boolean;
};

/**
 * Kort lar oss løfte frem oppgaver og innhold som hører sammen.
 * https://jokul-portal.intern.app.prodaws.fremtind.no/komponenter/card
 */
export function Card<T extends ElementType = "div">(
    props: Polymorphic<CardProps, T> & AsChildProps,
) {
    const {
        as = "div",
        asChild,
        className,
        clickable = false,
        padding = "s",
        variant = "high",
        ref,
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
}
