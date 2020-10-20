import React, { useContext } from "react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { BaseFeedback, BaseFeedbackProps, FeedbackContext } from "./BaseFeedback";
import { FeedbackOptions } from "./types";

const FeedbackContent: React.FC<{ legend: string }> = ({ legend }) => {
    const { options, value, setValue } = useContext(FeedbackContext);

    return (
        <RadioButtons
            legend={legend}
            name="feedback"
            choices={options.map((_, idx) => (idx + 1).toString())}
            inline
            onChange={(e) => setValue(parseInt(e.target.value, 10) as FeedbackOptions)}
            selectedValue={value?.toString()}
        />
    );
};

interface SimplifiedFeedbackProps extends Omit<BaseFeedbackProps, "description"> {
    description: string;
}

export const SimplifiedFeedback: React.FC<SimplifiedFeedbackProps> = ({ description, ...rest }) => {
    return (
        <BaseFeedback {...rest}>
            <FeedbackContent legend={description} />
        </BaseFeedback>
    );
};
