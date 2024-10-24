import clsx from "clsx";
import React, { useState, type FC, type ReactNode, HTMLProps, FocusEventHandler } from "react";
import { QuestionIcon } from "../icon/index.js";
import { Tooltip, type TooltipProps } from "./Tooltip.js";
import { TooltipContent } from "./TooltipContent.js";
import { TooltipTrigger } from "./TooltipTrigger.js";

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

    return (
        <Tooltip triggerOn="click" {...tooltipProps}>
            <TooltipTrigger>
                <button
                    {...triggerProps}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    type="button"
                    className={clsx("jkl-tooltip-question-button", triggerProps?.className)}
                    data-testid="jkl-tooltip-question-button"
                >
                    <QuestionIcon variant="inherit" bold={isBold} />
                    <span className="jkl-sr-only">Vis hjelpetekst</span>
                </button>
            </TooltipTrigger>
            <TooltipContent>{content}</TooltipContent>
        </Tooltip>
    );
};
