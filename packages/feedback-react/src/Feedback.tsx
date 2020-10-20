import React, { Fragment, useContext, useState } from "react";
import { ScreenReaderOnly } from "@fremtind/jkl-core";
import { Smiley } from "./Smiley";
import { BaseFeedback, BaseFeedbackProps, FeedbackContext } from "./BaseFeedback";
import { nanoid } from "nanoid";

const FeedbackContent = () => {
    const { options, value, setValue } = useContext(FeedbackContext);
    const [id] = useState(nanoid(8));

    return (
        <>
            {options?.map((feedbackOption) => (
                <Fragment key={feedbackOption}>
                    <input
                        className="jkl-feedback__answer__input"
                        type="radio"
                        name="feedback"
                        id={`${id}-feedback--${feedbackOption}`}
                        value={feedbackOption}
                        onChange={() => setValue(feedbackOption)}
                        checked={value === feedbackOption}
                    />
                    <label
                        data-testid={`feedback-${feedbackOption}`}
                        className="jkl-feedback__answer"
                        htmlFor={`${id}-feedback--${feedbackOption}`}
                    >
                        <Smiley element={feedbackOption} />
                        <ScreenReaderOnly>{feedbackOption}</ScreenReaderOnly>
                    </label>
                </Fragment>
            ))}
        </>
    );
};

export const Feedback: React.FC<BaseFeedbackProps> = (props) => {
    return (
        <BaseFeedback {...props}>
            <FeedbackContent />
        </BaseFeedback>
    );
};
