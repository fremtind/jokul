import React, { Fragment, useContext, useState, FC } from "react";
import { ScreenReaderOnly } from "@fremtind/jkl-core";
import { Smiley } from "./Smiley";
import { BaseFeedback, BaseFeedbackProps, FeedbackContext, rawFeedbackValues } from "./BaseFeedback";
import { nanoid } from "nanoid";

const FeedbackContent = () => {
    const { options, value, setValue } = useContext(FeedbackContext);
    const [id] = useState(nanoid(8));

    return (
        <>
            {rawFeedbackValues(options)?.map((feedbackOption) => (
                <Fragment key={feedbackOption}>
                    <input
                        className="jkl-feedback__answer-input"
                        type="radio"
                        name="feedback"
                        id={`${id}-feedback--${feedbackOption}`}
                        value={feedbackOption}
                        onChange={() => setValue(feedbackOption)}
                        checked={value === feedbackOption}
                    />
                    <label
                        data-testid={`feedback-${feedbackOption}`}
                        className="jkl-feedback__answer-label"
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

export const Feedback: FC<BaseFeedbackProps> = (props) => {
    return <BaseFeedback {...props} content={<FeedbackContent />} />;
};
