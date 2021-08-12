import React, { ChangeEventHandler, useMemo } from "react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { QuestionProps } from "../types";
import { useFollowUpContext } from "../followup/followupContext";
import { useMainQuestionContext } from "../main-question/mainQuestionContext";

export const RadioQuestion: React.VFC<QuestionProps> = ({ label, name, options, helpLabel }) => {
    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;

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
