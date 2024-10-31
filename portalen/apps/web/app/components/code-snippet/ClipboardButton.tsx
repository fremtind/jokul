import {
    IconButton,
    CheckIcon,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    type TooltipPlacement,
} from "@fremtind/jokul";
import React, { type FC } from "react";
import { CopyIcon } from "./CopyIcon";

interface ClipboardProps {
    target: string;
}

export const ClipboardButton: FC<ClipboardProps> = ({ target }) => {
    const copyTargetClick = () => {
        navigator.clipboard.writeText(target);
    };

    return (
        <div className="clipboard-button">
            <Tooltip
                delay={1000}
                triggerOn="click"
                placement={"left-start" as unknown as TooltipPlacement} // Ser visuelt ut som left i denne sammenhengen
            >
                <TooltipTrigger onClick={copyTargetClick}>
                    <IconButton aria-label="Kopier">
                        <CopyIcon />
                    </IconButton>
                </TooltipTrigger>
                <TooltipContent>
                    <div
                        aria-live="assertive"
                        className="clipboard-button__tooltip-content"
                    >
                        Kopiert <CheckIcon />
                    </div>
                </TooltipContent>
            </Tooltip>
        </div>
    );
};
