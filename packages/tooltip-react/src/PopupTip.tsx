import { QuestionIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { useState, type FC, type ReactNode, HTMLProps, FocusEventHandler, MouseEventHandler } from "react";
import { Tooltip, type TooltipProps } from "./Tooltip";
import { TooltipContent } from "./TooltipContent";
import { TooltipTrigger } from "./TooltipTrigger";

export interface PopupTipProps extends Omit<TooltipProps, "triggerOn" | "children"> {
    /**
     * Innholdet i tooltipet som vises
     */
    content: ReactNode;
    /**
     * Eventuelle props du vil sette på trigger-knappen for tooltipet
     */
    triggerProps?: Omit<HTMLProps<HTMLButtonElement>, "children" | "type">;
}

export const PopupTip: FC<PopupTipProps> = ({ content, triggerProps, ...tooltipProps }) => {
    const [isBold, setIsBold] = useState(false);

    const handleFocus: FocusEventHandler<HTMLButtonElement> = (event) => {
        setIsBold(true);
        triggerProps?.onFocus?.(event);
    };
    const handleBlur: FocusEventHandler<HTMLButtonElement> = (event) => {
        setIsBold(false);
        triggerProps?.onBlur?.(event);
    };
    const handleMouseOver: MouseEventHandler<HTMLButtonElement> = (event) => {
        setIsBold(true);
        triggerProps?.onMouseOver?.(event);
    };
    const handleMouseOut: MouseEventHandler<HTMLButtonElement> = (event) => {
        setIsBold(false);
        triggerProps?.onMouseOut?.(event);
    };

    return (
        <Tooltip triggerOn="click" {...tooltipProps}>
            <TooltipTrigger>
                <button
                    {...triggerProps}
                    onFocus={handleFocus}
                    onMouseOver={handleMouseOver}
                    onBlur={handleBlur}
                    onMouseOut={handleMouseOut}
                    type="button"
                    className={cn("jkl-tooltip-question-button", triggerProps?.className)}
                >
                    <QuestionIcon bold={isBold} />
                    <span className="jkl-sr-only">Vis hjelpetekst</span>
                </button>
            </TooltipTrigger>
            <TooltipContent>{content}</TooltipContent>
        </Tooltip>
    );
};
