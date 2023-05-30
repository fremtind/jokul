import { QuestionIcon } from "@fremtind/jkl-icons-react";
import React, { HTMLProps, forwardRef } from "react";
import { useTooltipContext } from "./Tooltip";
import { TooltipTrigger } from "./TooltipTrigger";

export const TooltipQuestionTrigger = forwardRef<HTMLButtonElement, HTMLProps<HTMLButtonElement>>(
    function TooltipQuestionButton(props, ref) {
        const { isOpen } = useTooltipContext();
        const [buttonHasFocus, setButtonHasFocus] = React.useState(false);

        const enableFocus = () => setButtonHasFocus(true);
        const disableFocus = () => setButtonHasFocus(false);

        return (
            <TooltipTrigger>
                <button
                    ref={ref}
                    onFocus={enableFocus}
                    onMouseOver={enableFocus}
                    onBlur={disableFocus}
                    onMouseOut={disableFocus}
                    {...props}
                    type="button"
                    className="jkl-tooltip-question-button"
                >
                    <QuestionIcon bold={buttonHasFocus} />
                    <span className="jkl-sr-only">{`${isOpen ? "Skjul" : "Vis"} hjelpetekst`}</span>
                </button>
            </TooltipTrigger>
        );
    },
);
