import clsx from "clsx";
import React, { HTMLProps, useState, type FC, type ReactNode } from "react";
import { QuestionIcon } from "../icon/icons/QuestionIcon.js";
import { Tooltip, type TooltipProps } from "./Tooltip.js";
import { TooltipContent } from "./TooltipContent.js";
import { TooltipTrigger } from "./TooltipTrigger.js";

export interface PopupTipProps
    extends Omit<TooltipProps, "triggerOn" | "children"> {
    /**
     * Innholdet i tooltipet som vises
     */
    content: ReactNode;
    /**
     * Eventuelle props du vil sette på trigger-knappen for tooltipet
     */
    triggerProps?: Omit<HTMLProps<HTMLButtonElement>, "children" | "type">;
}

export const PopupTip: FC<PopupTipProps> = ({
    content,
    triggerProps,
    ...tooltipProps
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Tooltip onOpenChange={setIsOpen} triggerOn="click" {...tooltipProps}>
            <TooltipTrigger>
                <button
                    {...triggerProps}
                    type="button"
                    className={clsx(
                        "jkl-tooltip-question-button",
                        triggerProps?.className,
                    )}
                    data-testid="jkl-tooltip-question-button"
                >
                    <QuestionIcon variant="inherit" bold={isOpen} />
                    <span className="jkl-sr-only">Vis hjelpetekst</span>
                </button>
            </TooltipTrigger>

            <TooltipContent data-ispopup={true}>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
                <div className="jkl-popuptip__content-wrapper" tabIndex={0}>
                    {content}
                </div>
            </TooltipContent>
        </Tooltip>
    );
};
