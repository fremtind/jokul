import React, { ReactNode, useEffect } from "react";
import cn from "classnames";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";

import { FeedbackOption, FeedbackType } from "../types";
import { useMainQuestion } from "./useMainQuestion";
import { getQuestionFromType } from "../utils";
import { MainQuestionContextProvider } from "./mainQuestionContext";
import { AddonQuestion } from "../questions";
import { useFeedbackContext } from "../feedbackContext";
import { FeedbackSuccess } from "../FeedbackSuccess";

const defaultSuccessMessage = {
    title: "Takk for tilbakemeldingen!",
    children:
        "Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
};

interface Props {
    type: "slider" | "radio";
    label: string;
    options: FeedbackOption[];
    addOnQuestion?: {
        label: string;
        helpLabel?: string;
    };
    successMessage?: {
        title: string;
        children: ReactNode;
    };
    onSubmit: (value: FeedbackType) => void;
}

export const MainQuestion = ({
    label,
    options,
    type,
    addOnQuestion,
    successMessage = defaultSuccessMessage,
    onSubmit,
}: Props) => {
    const mainQuestionState = useMainQuestion(onSubmit);

    const { setFeedbackSubmitted, contactSubmitted } = useFeedbackContext();
    const { handleSubmit, currentValue, setCurrentValue, submitted } = mainQuestionState;
    const [submitWrapperRef] = useAnimatedHeight<HTMLDivElement>(currentValue !== undefined);

    useEffect(() => {
        setFeedbackSubmitted(submitted);
    }, [submitted, setFeedbackSubmitted]);

    const MainQuestionComp = getQuestionFromType(type);

    return (
        <>
            {!submitted && (
                <MainQuestionContextProvider state={mainQuestionState}>
                    <MainQuestionComp label={label} options={options} />
                    <div
                        ref={submitWrapperRef}
                        className={cn({
                            "jkl-feedback__submit-wrapper": true,
                            "jkl-feedback__submit-wrapper--hidden": currentValue === undefined,
                        })}
                    >
                        {addOnQuestion && <AddonQuestion {...addOnQuestion} />}
                        <div className="jkl-layout-spacing--medium-top">
                            <PrimaryButton onClick={handleSubmit} className="jkl-layout-spacing--medium-right">
                                Send
                            </PrimaryButton>
                            <TertiaryButton onClick={() => setCurrentValue(undefined)}>Avbryt</TertiaryButton>
                        </div>
                    </div>
                </MainQuestionContextProvider>
            )}
            {submitted && !contactSubmitted && <FeedbackSuccess {...successMessage} />}
        </>
    );
};
