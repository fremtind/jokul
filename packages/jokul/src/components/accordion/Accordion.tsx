import clsx from "clsx";
import React, { type FC } from "react";
import type { AccordionProps } from "./types.js";

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
            className={clsx("jkl-accordion", className)}
            data-density={density}
            id={id}
            {...rest}
        />
    );
};
