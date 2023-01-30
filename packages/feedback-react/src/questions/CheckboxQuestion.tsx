import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { FieldGroup } from "@fremtind/jkl-input-group-react";
import React, { ChangeEventHandler, useEffect, useRef } from "react";
import { useFollowUpContext } from "../followup/followupContext";
import { useMainQuestionContext } from "../main-question/mainQuestionContext";
import { FeedbackOption, QuestionProps } from "../types";

export const CheckboxQuestion: React.FC<QuestionProps> = ({ label, name, options, helpLabel, autoFocus = false }) => {
    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus();
        }
    }, [autoFocus, ref]);

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
        <FieldGroup labelProps={{ variant: "large" }} legend={label} helpLabel={helpLabel}>
            {options?.map((option, i) => (
                <Checkbox
                    key={`${label}-${option.value}`}
                    name={name || label}
                    value={option.value.toString()}
                    onChange={handleChange}
                    ref={i === 0 ? ref : undefined}
                >
                    {option.label}
                </Checkbox>
            ))}
        </FieldGroup>
    );
};
