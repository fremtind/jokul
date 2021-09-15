import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { Slider } from "@fremtind/jkl-slider-react";

import { useFollowUpContext } from "../followup/followupContext";
import { useMainQuestionContext } from "../main-question/mainQuestionContext";
import { QuestionProps } from "../types";

const findMinValue = (number: number, lowest: number) => (number < lowest ? number : lowest);
const findMaxValue = (number: number, highest: number) => (number > highest ? number : highest);

export const SliderQuestion: React.VFC<QuestionProps> = ({ label, name, options, autoFocus = false }) => {
    const numbers = options?.map((option) => parseInt(option.value.toString()));
    const from = numbers?.reduce(findMinValue);
    const to = numbers?.reduce(findMaxValue);

    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const selectedOption = options?.find((option) => event.target.value === option.value.toString());
        context?.setCurrentValue(selectedOption);
    };

    const [value, setValue] = useState<number>();
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus();
        }
    }, [autoFocus, ref]);

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
            ref={ref}
            onChange={handleChange}
        />
    );
};

SliderQuestion.displayName = "SliderQuestion";
