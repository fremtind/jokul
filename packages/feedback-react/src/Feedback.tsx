import React, { FC, Fragment, useContext, useState } from "react";
import { nanoid } from "nanoid";
import { ScreenReaderOnly } from "@fremtind/jkl-core";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { BaseFeedback, BaseFeedbackProps, FeedbackContext, rawFeedbackValues } from "./BaseFeedback";
import { getSmiley, Smiley } from "./Smiley";

const FeedbackContent = () => {
    const { description, options, value, setValue } = useContext(FeedbackContext);
    const [id] = useState(nanoid(8));

    return (
        <FieldGroup legend={description} className="jkl-feedback__fieldset">
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
        </FieldGroup>
    );
};

export const Feedback: FC<BaseFeedbackProps> = (props) => {
    return <BaseFeedback {...props} content={<FeedbackContent />} />;
};
