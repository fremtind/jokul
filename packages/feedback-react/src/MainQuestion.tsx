import React from "react";
import cn from "classnames";

import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { TextArea } from "@fremtind/jkl-text-input-react";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";

import { FeedbackState, FeedbackOption } from "./types";

interface Props {
    label: string;
    feedbackOptions: FeedbackOption[];
    textAreaLabel?: string;
    feedbackState: FeedbackState;
}

export const MainQuestion = ({ label, feedbackOptions, textAreaLabel, feedbackState }: Props) => {
    const { value, setValue, message, setMessage, handleSubmit } = feedbackState;

    const [submitWrapperRef] = useAnimatedHeight<HTMLDivElement>(value !== undefined);

    return (
        <>
            <RadioButtons
                variant="large"
                legend={label}
                name="feedback"
                inline={feedbackOptions.length < 3}
                selectedValue={value?.value.toString()}
                choices={feedbackOptions.map((c) => ({ label: c.label, value: c.value.toString() }))}
                onChange={(e) => setValue(feedbackOptions.find((a) => a.value.toString() === e.target.value))}
            />
            <div
                ref={submitWrapperRef}
                className={cn({
                    "jkl-feedback__submit-wrapper": true,
                    "jkl-feedback__submit-wrapper--hidden": value === undefined,
                })}
            >
                <div className="jkl-layout-spacing--medium-top">
                    {textAreaLabel && (
                        <TextArea
                            inline
                            startOpen
                            rows={4}
                            data-testid="jkl-feedback__open-question"
                            className="jkl-layout-spacing--medium-bottom"
                            label={value?.textAreaLabel || textAreaLabel}
                            placeholder={value?.textAreaLabel || textAreaLabel}
                            helpLabel="Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre."
                            value={message || ""}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    )}
                    <PrimaryButton onClick={handleSubmit} className="jkl-layout-spacing--medium-right">
                        Send
                    </PrimaryButton>
                    <TertiaryButton onClick={() => setValue(undefined)}>Avbryt</TertiaryButton>
                </div>
            </div>
        </>
    );
};
