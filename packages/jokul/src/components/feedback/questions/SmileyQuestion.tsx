import React, {
    type ChangeEventHandler,
    Fragment,
    useId,
    useMemo,
} from "react";
import { FieldGroup } from "../../input-group/FieldGroup.js";
import { useFollowUpContext } from "../followup/followupContext.js";
import { useMainQuestionContext } from "../main-question/mainQuestionContext.js";
import type { FeedbackOption, QuestionProps } from "../types.js";
import { defaultOptions, getSmiley } from "./smileyUtils.js";

const isNotInScale = (option: FeedbackOption) =>
    typeof option.value !== "number" || ![1, 2, 3, 4, 5].includes(option.value);

export const SmileyQuestion: React.FC<QuestionProps> = ({
    label,
    name = "smiley",
    helpLabel,
    options = defaultOptions,
}) => {
    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;
    const id = useId();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);
        const option = options?.find(
            (option) => option.value.toString() === e.target.value,
        );
        context?.setCurrentValue(option);
    };

    const selectedValue = useMemo(
        () =>
            Array.isArray(context?.currentValue)
                ? context?.currentValue[0].value
                : context?.currentValue?.value,
        [context?.currentValue],
    );

    if (options.some(isNotInScale)) {
        console.error(
            "SmileyQuestion må ha tallene 1 til 5 som verdier for alternativene sine",
        );
        return null;
    }

    if (!context || !options) {
        console.error(
            "Questions must be used inside a Followup or Feedback context provider",
        );
        return null;
    }

    return (
        <FieldGroup
            labelProps={{ variant: "large" }}
            legend={label}
            helpLabel={helpLabel}
        >
            <div className="jkl-feedback-smileys">
                {options.map((option) => (
                    <Fragment key={option.value}>
                        <input
                            className="jkl-sr-only"
                            id={`${id}-${name}-${option.value}`}
                            name={`${id}-${name}`}
                            type="radio"
                            value={option.value}
                            onChange={handleChange}
                            checked={selectedValue === option.value}
                        />
                        <label
                            className="jkl-feedback-smiley-option"
                            htmlFor={`${id}-${name}-${option.value}`}
                        >
                            <span className="jkl-sr-only">{option.label}</span>
                            {getSmiley(Number(option.value))}
                        </label>
                    </Fragment>
                ))}
            </div>
        </FieldGroup>
    );
};
