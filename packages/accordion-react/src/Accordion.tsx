import React, { FC } from "react";
import cn from "classnames";
import { WithChildren } from "@forbrukerradet/jkl-core";

export interface AccordionProps extends WithChildren {
    className?: string;
}

export const Accordion: FC<AccordionProps> = ({ className, ...rest }) => {
    return <div data-testid="jkl-accordion" className={cn("jkl-accordion", className)} {...rest} />;
};
