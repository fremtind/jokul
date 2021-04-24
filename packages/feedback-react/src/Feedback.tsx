import React, { Fragment, useContext, useState, FC } from "react";
import { ScreenReaderOnly } from "@fremtind/jkl-core";
import { getSmiley, Smiley } from "./Smiley";
import { BaseFeedback, BaseFeedbackProps, FeedbackContext, rawFeedbackValues } from "./BaseFeedback";
import { nanoid } from "nanoid";

const FeedbackContent = () => {
    const { options, value, setValue } = useContext(FeedbackContext);
    const [id] = useState(nanoid(8));

    return (
        <>
            {rawFeedbackValues(options)?.map((feedbackOption) => {
                const radioButtonId = `${id}-feedback--${feedbackOption}`;

                return (
                    <Fragment key={feedbackOption}>
                        <input
                            className="jkl-feedback__answer-input"
                            type="radio"
                            name="feedback"
                            id={radioButtonId}
                            value={feedbackOption}
                            onChange={() => setValue(feedbackOption)}
                            checked={value === feedbackOption}
                        />
                        <label
                            data-testid={`feedback-${feedbackOption}`}
                            className="jkl-feedback__answer-label"
                            htmlFor={radioButtonId}
                        >
                            <Smiley element={feedbackOption} />
                            <ScreenReaderOnly>{getSmiley(feedbackOption).label}</ScreenReaderOnly>
                        </label>
                    </Fragment>
                );
            })}
        </>
    );
};

export const Feedback: FC<BaseFeedbackProps> = (props) => {
    return <BaseFeedback {...props} content={<FeedbackContent />} />;
};
