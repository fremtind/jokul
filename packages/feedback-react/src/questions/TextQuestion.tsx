import React, { ChangeEventHandler, useEffect, useMemo, useRef } from "react";
import { TextArea } from "@fremtind/jkl-text-input-react";

import { QuestionProps } from "../types";
import { useFollowUpContext } from "../followup/followupContext";
import { useMainQuestionContext } from "../main-question/mainQuestionContext";
import { FeedbackAnswer } from "../types";

export const TextQuestion: React.VFC<QuestionProps> = ({
    label,
    name,
    helpLabel = "Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre.",
    autoFocus = false,
    maxLength,
}) => {
    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus();
        }
    }, [autoFocus, ref]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
            variant="large"
            label={label}
            name={name || label}
            startOpen
            rows={5}
            value={currentValue}
            onChange={handleChange}
            helpLabel={helpLabel}
            maxLength={maxLength}
        />
    );
};
