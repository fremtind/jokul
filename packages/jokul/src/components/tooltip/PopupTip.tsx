import clsx from "clsx";
import React, { useState, type FC } from "react";
import { QuestionIcon } from "../icon/icons/QuestionIcon.js";
import { Tooltip } from "./Tooltip.js";
import { TooltipContent } from "./TooltipContent.js";
import { TooltipTrigger } from "./TooltipTrigger.js";
import type { PopupTipProps } from "./types.js";

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
