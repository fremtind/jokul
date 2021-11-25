import React, { ChangeEventHandler, useMemo } from "react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { useFollowUpContext } from "../followup/followupContext";
import { useMainQuestionContext } from "../main-question/mainQuestionContext";
import { FeedbackOption, QuestionProps } from "../types";
import { defaultOptions, getSmiley } from "./smileyUtils";

const isNotInScale = (option: FeedbackOption) =>
    typeof option.value !== "number" || ![1, 2, 3, 4, 5].includes(option.value);

export const SmileyQuestion: React.VFC<QuestionProps> = ({
    label,
    name = "smiley",
    helpLabel,
    options = defaultOptions,
}) => {
    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const option = options?.find((option) => option.value.toString() === e.target.value);
        context?.setCurrentValue(option);
    };

    const selectedValue = useMemo(
        () => (Array.isArray(context?.currentValue) ? context?.currentValue[0].value : context?.currentValue?.value),
        [context?.currentValue],
    );

    if (options.some(isNotInScale)) {
        console.error("SmileyQuestion må ha tallene 1 til 5 som verdier for alternativene sine");
        return null;
    }

    if (!context || !options) {
        console.error("Questions must be used inside a Followup or Feedback context provider");
        return null;
    }

    return (
        <FieldGroup labelProps={{ variant: "large" }} legend={label} helpLabel={helpLabel}>
            {options.map((option) => (
                <>
                    <input
                        className="jkl-sr-only"
                        id={`${name}-${option.value}`}
                        key={option.value}
                        name={name}
                        type="radio"
                        value={option.value}
                        onChange={handleChange}
                        checked={selectedValue === option.value}
                    />
                    <label className="jkl-feedback-smiley-option" htmlFor={`${name}-${option.value}`}>
                        <span className="jkl-sr-only">{option.label}</span>
                        {getSmiley(Number(option.value))}
                    </label>
                </>
            ))}
        </FieldGroup>
    );
};
