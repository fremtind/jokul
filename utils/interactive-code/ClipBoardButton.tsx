import { IconButton } from "@fremtind/jkl-icon-button-react";
import { Icon } from "@fremtind/jkl-icons-react";
import { Tooltip, TooltipContent, TooltipTrigger, type TooltipPlacement } from "@fremtind/jkl-tooltip-react";
import React from "react";
import { type FC } from "react";

interface ClipboardProps {
    target: string;
}

export const ClipboardButton: FC<ClipboardProps> = ({ target }) => {
    const copyTargetClick = () => {
        navigator.clipboard.writeText(target);
    };

    return (
        <Tooltip delay={1000} triggerOn="click" placement={"left-start" as unknown as TooltipPlacement}>
            <TooltipTrigger onClick={copyTargetClick}>
                <IconButton aria-label="Kopier">
                    <Icon>{"\ue14d"}</Icon>
                </IconButton>
            </TooltipTrigger>
            <TooltipContent>
                <div aria-live="assertive" className="clipboard-button__tooltip-content">
                    Kopiert
                </div>
            </TooltipContent>
        </Tooltip>
    );
};
