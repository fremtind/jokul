import React, { ReactNode, useEffect } from "react";
import cn from "classnames";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";

import { FeedbackType } from "../types";
import { useMainQuestion } from "./useMainQuestion";
import { getChildrenOfType } from "../utils";
import { MainQuestionContextProvider } from "./mainQuestionContext";
import { SingleChoiceQuestion, SliderQuestion, AddonQuestion } from "../questions";
import { useFeedbackContext } from "../feedbackContext";
import { FeedbackSuccess } from "../FeedbackSuccess";

const getQuestionComponents = getChildrenOfType(SliderQuestion, SingleChoiceQuestion);
const getAddonQuestions = getChildrenOfType(AddonQuestion);
const getSuccessMessages = getChildrenOfType(FeedbackSuccess);

const defaultSuccessMessage = (
    <FeedbackSuccess title="Takk for tilbakemeldingen!">
        Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre
        for deg og alle andre som bruker dem.
    </FeedbackSuccess>
);

interface Props {
    children: ReactNode;
    onSubmit: (value: FeedbackType) => void;
}

export const MainQuestion = ({ onSubmit, children }: Props) => {
    const mainQuestionState = useMainQuestion(onSubmit);
    const questionComponents = getQuestionComponents(children);
    const addonQuestions = getAddonQuestions(children);
    const successMessageComponents = getSuccessMessages(children);

    const { setFeedbackSubmitted } = useFeedbackContext();
    const { handleSubmit, currentValue, setCurrentValue, submitted } = mainQuestionState;
    const [submitWrapperRef] = useAnimatedHeight<HTMLDivElement>(currentValue !== undefined);

    useEffect(() => {
        setFeedbackSubmitted(submitted);
    }, [submitted, setFeedbackSubmitted]);

    if (!questionComponents?.length) {
        console.warn("MainQuestion requires at least one Question as its children");
        return null;
    }

    const sucessMessage = successMessageComponents?.[0] || defaultSuccessMessage;

    return (
        <>
            {!submitted && (
                <MainQuestionContextProvider state={mainQuestionState}>
                    {questionComponents[0]}
                    <div
                        ref={submitWrapperRef}
                        className={cn({
                            "jkl-feedback__submit-wrapper": true,
                            "jkl-feedback__submit-wrapper--hidden": currentValue === undefined,
                        })}
                    >
                        {addonQuestions?.length && addonQuestions[0]}
                        <div className="jkl-layout-spacing--medium-top">
                            <PrimaryButton onClick={handleSubmit} className="jkl-layout-spacing--medium-right">
                                Send
                            </PrimaryButton>
                            <TertiaryButton onClick={() => setCurrentValue(undefined)}>Avbryt</TertiaryButton>
                        </div>
                    </div>
                </MainQuestionContextProvider>
            )}
            {submitted && sucessMessage}
        </>
    );
};
