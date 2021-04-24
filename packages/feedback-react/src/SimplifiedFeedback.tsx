import React, { useContext, FC } from "react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { BaseFeedback, BaseFeedbackProps, FeedbackContext, rawFeedbackValues } from "./BaseFeedback";
import { FeedbackValue } from "./types";

const FeedbackContent: FC = () => {
    const { description, options, value, setValue } = useContext(FeedbackContext);

    return (
        <RadioButtons
            className="jkl-feedback__fieldset"
            legend={description}
            name="feedback"
            choices={rawFeedbackValues(options).map((_, idx) => (idx + 1).toString())}
            inline
            onChange={(e) => setValue(parseInt(e.target.value, 10) as FeedbackValue)}
            selectedValue={value?.toString()}
        />
    );
};

export const SimplifiedFeedback = (props: BaseFeedbackProps) => {
    return <BaseFeedback {...props} content={<FeedbackContent />} />;
};
