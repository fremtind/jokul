import { Density, WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { FC } from "react";

export interface AccordionProps extends WithChildren {
    className?: string;
    density?: Density;
    id?: string;
}

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 * Bruk heller komponenten `Expandable`.
 */
export const Accordion: FC<AccordionProps> = ({
    className,
    density,
    id,
    ...rest
}) => {
    return (
        <section
            role="group"
            data-testid="jkl-accordion"
            className={cn("jkl-accordion", className)}
            data-density={density}
            id={id}
            {...rest}
        />
    );
};
