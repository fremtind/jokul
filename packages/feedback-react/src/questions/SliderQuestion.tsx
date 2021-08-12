import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Slider } from "@fremtind/jkl-slider-react";

import { useFollowUpContext } from "../followup/followupContext";
import { useMainQuestionContext } from "../main-question/mainQuestionContext";
import { QuestionProps } from "../types";

export const SliderQuestion: React.VFC<QuestionProps> = ({ label, name, options }) => {
    const numbers = options?.map((option) => parseInt(option.value.toString()));
    const from = numbers?.reduce((number, lowest) => (number < lowest ? number : lowest));
    const to = numbers?.reduce((number, highest) => (number > highest ? number : highest));

    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const selectedOption = options?.find((option) => event.target.value === option.value.toString());
        context?.setCurrentValue(selectedOption);
    };

    const [value, setValue] = useState<number>();

    useEffect(() => {
        const option = Array.isArray(context?.currentValue) ? context?.currentValue[0] : context?.currentValue;
        const selectedValue = option && parseInt(option.value.toString());
        setValue(selectedValue);
    }, [context?.currentValue]);

    if (!context) {
        console.error("Questions must be used inside a Followup or Feedback context provider");
        return null;
    }

    return (
        <Slider
            variant="large"
            label={label}
            name={name || label}
            value={value}
            from={from}
            to={to}
            onChange={handleChange}
        />
    );
};

SliderQuestion.displayName = "SliderQuestion";
