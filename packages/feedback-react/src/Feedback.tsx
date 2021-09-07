import React, { FC, Fragment, useContext, useState } from "react";
import { nanoid } from "nanoid";
import { ScreenReaderOnly } from "@fremtind/jkl-core";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { BaseFeedback, BaseFeedbackProps, FeedbackContext } from "./BaseFeedback";
import { Smiley } from "./Smiley";
import { transformToValuePair } from "./utils";

const FeedbackContent = () => {
    const { description, options, value, setValue } = useContext(FeedbackContext);
    const [id] = useState(nanoid(8));

    return (
        <FieldGroup legend={description} className="jkl-feedback__fieldset" variant="medium">
            {options?.map((option) => {
                const { label, value: optionValue } = transformToValuePair(option);
                const radioButtonId = `${id}-feedback--${optionValue}`;

                return (
                    <Fragment key={optionValue}>
                        <input
                            className="jkl-feedback__answer-input"
                            type="radio"
                            name="feedback"
                            id={radioButtonId}
                            value={optionValue}
                            onChange={() => setValue(optionValue)}
                            checked={value === optionValue}
                        />
                        <label
                            data-testid={`feedback-${optionValue}`}
                            className="jkl-feedback__answer-label"
                            htmlFor={radioButtonId}
                        >
                            <Smiley element={optionValue} />
                            <ScreenReaderOnly>{label}</ScreenReaderOnly>
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
