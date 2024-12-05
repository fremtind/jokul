import { QuestionIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { HTMLProps, useState, type FC, type ReactNode } from "react";
import { Tooltip, type TooltipProps } from "./Tooltip";
import { TooltipContent } from "./TooltipContent";
import { TooltipTrigger } from "./TooltipTrigger";

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
                    className={cn(
                        "jkl-tooltip-question-button",
                        triggerProps?.className,
                    )}
                    data-testid="jkl-tooltip-question-button"
                >
                    <QuestionIcon variant="inherit" bold={isOpen} />
                    <span className="jkl-sr-only">Vis hjelpetekst</span>
                    <span
                        className="jkl-sr-only"
                        aria-live="polite"
                        data-testid="popuptip-content"
                    >
                        {isOpen ? content : ""}
                    </span>
                </button>
            </TooltipTrigger>
            <TooltipContent data-ispopup={true}>{content}</TooltipContent>
        </Tooltip>
    );
};
