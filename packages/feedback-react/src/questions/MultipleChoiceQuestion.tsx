import React, { ChangeEventHandler } from "react";

import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { useFollowUpContext } from "../followup/followupContext";
import { useMainQuestionContext } from "../main-question/mainQuestionContext";
import { FeedbackOption, QuestionProps } from "../types";

export const MultipleChoiceQuestion: React.VFC<QuestionProps> = ({ label, name, options, helpLabel }) => {
    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target;
        const matchingOption = options?.find((option) => option.value.toString() === value);
        if (!matchingOption) return;

        if (!context?.currentValue) {
            context?.setCurrentValue([matchingOption]);
            return;
        }

        if (Array.isArray(context?.currentValue)) {
            const found = context.currentValue.find((option) => option === matchingOption);
            if (found) {
                context.setCurrentValue((oldValues) =>
                    (oldValues as FeedbackOption[]).filter((option) => option !== found),
                );
            } else {
                context.setCurrentValue((oldValues) => [...(oldValues as FeedbackOption[]), matchingOption]);
            }
        }
    };

    if (!context) {
        console.error("Questions must be used inside a Followup or Feedback context provider");
        return null;
    }

    return (
        <FieldGroup variant="large" legend={label} helpLabel={helpLabel}>
            {options?.map((option) => (
                <Checkbox
                    key={`${label}-${option.value}`}
                    name={name || label}
                    value={option.value.toString()}
                    onChange={handleChange}
                >
                    {option.label}
                </Checkbox>
            ))}
        </FieldGroup>
    );
};
