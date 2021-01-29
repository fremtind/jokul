import React, { useContext, FC } from "react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { BaseFeedback, BaseFeedbackProps, FeedbackContext } from "./BaseFeedback";
import { FeedbackValue } from "./types";

const FeedbackContent: FC<{ legend: string }> = ({ legend }) => {
    const { options, value, setValue } = useContext(FeedbackContext);

    return (
        <RadioButtons
            legend={legend}
            name="feedback"
            choices={options.map((_, idx) => (idx + 1).toString())}
            inline
            onChange={(e) => setValue(parseInt(e.target.value, 10) as FeedbackValue)}
            selectedValue={value?.toString()}
        />
    );
};

export interface SimplifiedFeedbackProps extends Omit<BaseFeedbackProps, "description"> {
    description: string;
}

export const SimplifiedFeedback = ({ description, ...rest }: SimplifiedFeedbackProps) => {
    return <BaseFeedback {...rest} content={<FeedbackContent legend={description} />} />;
};
