import cn from "classnames";
import React, { FC } from "react";

export interface AccordionProps {
    className?: string;
}

export const Accordion: FC<AccordionProps> = ({ className, ...rest }) => {
    return <div data-testid="jkl-accordion" className={cn("jkl-accordion", className)} {...rest} />;
};
