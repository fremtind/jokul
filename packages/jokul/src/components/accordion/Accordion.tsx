import clsx from "clsx";
import React, { FC } from "react";
import { Density, WithChildren } from "../..";

export interface AccordionProps extends WithChildren {
    className?: string;
    density?: Density;
    id?: string;
}

export const Accordion: FC<AccordionProps> = ({ className, density, id, ...rest }) => {
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
