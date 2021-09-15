import React, { ChangeEventHandler, useEffect, useMemo, useRef } from "react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { QuestionProps } from "../types";
import { useFollowUpContext } from "../followup/followupContext";
import { useMainQuestionContext } from "../main-question/mainQuestionContext";

export const RadioQuestion: React.VFC<QuestionProps> = ({ label, name, options, helpLabel, autoFocus = false }) => {
    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;

    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus();
        }
    }, [autoFocus, ref]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const option = options?.find((option) => option.value.toString() === e.target.value);
        context?.setCurrentValue(option);
    };

    const selectedValue = useMemo(
        () =>
            Array.isArray(context?.currentValue)
                ? context?.currentValue[0].value.toString()
                : context?.currentValue?.value.toString(),
        [context?.currentValue],
    );

    if (!context) {
        console.error("Questions must be used inside a Followup or Feedback context provider");
        return null;
    }

    return (
        <RadioButtons
            ref={ref}
            variant="large"
            legend={label}
            name={name || label}
            choices={options?.map(({ label, value }) => ({ label, value: value.toString() })) || []}
            selectedValue={selectedValue}
            onChange={handleChange}
            helpLabel={helpLabel}
        />
    );
};
