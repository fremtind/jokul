import { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { FC } from "react";

export interface AccordionProps extends WithChildren {
    className?: string;
}

export const Accordion: FC<AccordionProps> = ({ className, ...rest }) => {
    return <div data-testid="jkl-accordion" className={cn("jkl-accordion", className)} {...rest} />;
};
