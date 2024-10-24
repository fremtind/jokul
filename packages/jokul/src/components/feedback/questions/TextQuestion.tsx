import React, { ChangeEventHandler, useEffect, useMemo, useRef } from "react";
import { TextArea } from "../../text-input/TextArea.js";
import { useFeedbackContext } from "../feedbackContext.js";
import { useFollowUpContext } from "../followup/followupContext.js";
import { useMainQuestionContext } from "../main-question/mainQuestionContext.js";
import { FeedbackAnswer, QuestionProps } from "../types.js";

export const TextQuestion: React.FC<QuestionProps> = ({
    label,
    name,
    helpLabel = "Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",
    autoFocus = false,
}) => {
    const { counter } = useFeedbackContext();
    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus();
        }
    }, [autoFocus, ref]);

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const value: FeedbackAnswer = {
            label,
            name: name || label,
            type: "text",
            value: e.target.value,
        };
        context?.setCurrentValue(value);
    };

    const currentValue = useMemo(
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
        <TextArea
            ref={ref}
            label={label}
            labelProps={{ variant: "large" }}
            name={name || label}
            startOpen
            rows={5}
            value={currentValue}
            onChange={handleChange}
            helpLabel={helpLabel}
            counter={counter}
        />
    );
};
