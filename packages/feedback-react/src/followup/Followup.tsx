import React, { ReactNode, useEffect, useState } from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { FeedbackAnswer, FeedbackQuestion } from "../types";
import { useFollowup } from "./useFollowup";
import { FollowUpProvider } from "./followupContext";
import { getChildrenOfType, getTypeFromComponent } from "../utils";
import { MultipleChoiceQuestion, SingleChoiceQuestion, SliderQuestion, TextQuestion } from "../questions";
import { useFeedbackContext } from "../feedbackContext";
import { FeedbackSuccess } from "../FeedbackSuccess";

const getQuestionComponents = getChildrenOfType(
    SliderQuestion,
    MultipleChoiceQuestion,
    SingleChoiceQuestion,
    TextQuestion,
);
const getSuccessMessages = getChildrenOfType(FeedbackSuccess);

const defaultSuccessMessage = (
    <FeedbackSuccess title="Takk, igjen!">
        Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre
        for deg og alle andre som bruker den.
    </FeedbackSuccess>
);

interface Props {
    children: ReactNode;
    onSubmit: (values: FeedbackAnswer[]) => void;
}

export const Followup = ({ children, onSubmit }: Props) => {
    const questionComponents = getQuestionComponents(children);
    const successMessage = getSuccessMessages(children)?.[0] || defaultSuccessMessage;
    const [noThanks, setNoThanks] = useState(false);

    const questions: FeedbackQuestion[] =
        questionComponents?.map((component) => ({
            ...component.props,
            options: component.props.options || [],
            type: getTypeFromComponent(component),
        })) || [];

    const followupState = useFollowup(questions, onSubmit);
    const { handleAbort, handleNext, step, submitted } = followupState;
    const { followupStarted, setFollowupStarted, setFollowupSubmitted } = useFeedbackContext();

    useEffect(() => {
        setFollowupSubmitted(submitted);
    }, [submitted, setFollowupSubmitted]);

    if (!questionComponents?.length) {
        console.warn("Followup requires at least one Question as its children");
        return null;
    }

    const Button = step.isLast ? PrimaryButton : SecondaryButton;

    if (noThanks) {
        return null;
    }

    return (
        <FollowUpProvider state={followupState}>
            {!followupStarted && (
                <>
                    <p className="jkl-heading-4 jkl-layout-spacing--medium-top jkl-component-spacing--small-bottom">
                        Har du tid til å svare på noen spørmål til?
                    </p>
                    <p className="jkl-body jkl-layout-spacing--medium-bottom">
                        Det tar kun et minutt og hjelper oss å lage bedre løsninger for deg.
                    </p>
                    <PrimaryButton
                        onClick={() => setFollowupStarted(true)}
                        className="jkl-layout-spacing--medium-right"
                    >
                        Jeg har tid!
                    </PrimaryButton>
                    <TertiaryButton onClick={() => setNoThanks(true)}>Nei takk</TertiaryButton>
                </>
            )}
            {!submitted && followupStarted && (
                <>
                    <p className="jkl-feedback__step-counter">
                        Steg {step.number + 1} av {questions.length}
                    </p>
                    {questionComponents[step.number]}
                    <div className="jkl-layout-spacing--medium-top">
                        <Button onClick={() => handleNext()}>{step.isLast ? "Send inn" : "Neste"}</Button>
                        <TertiaryButton onClick={handleAbort} className="jkl-layout-spacing--medium-left">
                            Avbryt
                        </TertiaryButton>
                    </div>
                </>
            )}
            {submitted && successMessage}
        </FollowUpProvider>
    );
};
