import { WithChildren, getCompactValue } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { FC } from "react";

export interface AccordionProps extends WithChildren {
    className?: string;
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     */
    compact?: boolean;
}

export const Accordion: FC<AccordionProps> = ({ className, compact, ...rest }) => {
    return (
        <div
            data-testid="jkl-accordion"
            className={cn("jkl-accordion", className)}
            data-compact={getCompactValue(compact)}
            {...rest}
        />
    );
};
