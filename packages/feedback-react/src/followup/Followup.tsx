import React, { ReactNode, useEffect, useRef, useState, VFC } from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { FeedbackAnswer, FollowupQuestion } from "../types";
import { useFollowup } from "./useFollowup";
import { FollowUpProvider } from "./followupContext";
import { getQuestionFromType } from "../utils";
import { useFeedbackContext } from "../feedbackContext";
import { FeedbackSuccess } from "../FeedbackSuccess";

const defaultSuccessMessage = {
    title: "Takk, igjen!",
    children:
        "Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
};

interface Props {
    questions: FollowupQuestion[];
    successMessage?: {
        title: string;
        children: ReactNode;
    };
    onSubmit: (values: FeedbackAnswer[]) => void;
}

export const Followup: VFC<Props> = ({ questions, successMessage = defaultSuccessMessage, onSubmit }) => {
    const [noThanks, setNoThanks] = useState(false);
    const focusRef = useRef<HTMLParagraphElement>(null);
    const followupState = useFollowup(questions, onSubmit);
    const { handleAbort, handleNext, step, submitted } = followupState;
    const { followupStarted, setFollowupStarted, setFollowupSubmitted, contactSubmitted } = useFeedbackContext();

    useEffect(() => {
        if (step.number === 0) {
            return;
        }
        focusRef.current && focusRef.current.focus();
    }, [step]);

    useEffect(() => {
        setFollowupSubmitted(submitted);
    }, [submitted, setFollowupSubmitted]);

    const QuestionComponent = getQuestionFromType(questions[step.number].type);
    const Button = step.isLast ? PrimaryButton : SecondaryButton;

    if (noThanks) {
        return null;
    }

    return (
        <FollowUpProvider state={followupState}>
            {!followupStarted && (
                <div className="jkl-feedback__fade-in">
                    <p className="jkl-heading-4 jkl-layout-spacing--medium-top jkl-component-spacing--small-bottom">
                        Har du tid til å svare på noen flere spørsmål?
                    </p>
                    <p className="jkl-body jkl-layout-spacing--medium-bottom">
                        Det tar kun et minutt, og hjelper oss å lage bedre løsninger for deg.
                    </p>
                    <PrimaryButton
                        onClick={() => setFollowupStarted(true)}
                        className="jkl-layout-spacing--medium-right"
                    >
                        Jeg har tid!
                    </PrimaryButton>
                    <TertiaryButton onClick={() => setNoThanks(true)}>Nei takk</TertiaryButton>
                </div>
            )}
            {!submitted && followupStarted && (
                <form onSubmit={handleNext} className="jkl-feedback__fade-in">
                    <p className="jkl-feedback__step-counter" ref={focusRef}>
                        Steg {step.number + 1} av {questions.length}
                    </p>
                    {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                    <QuestionComponent {...questions[step.number]} autoFocus />
                    <div className="jkl-layout-spacing--medium-top" aria-live="off">
                        <Button type="submit">{step.isLast ? "Send inn" : "Neste"}</Button>
                        <TertiaryButton onClick={handleAbort} className="jkl-layout-spacing--medium-left">
                            Avbryt
                        </TertiaryButton>
                    </div>
                </form>
            )}
            {submitted && !contactSubmitted && <FeedbackSuccess {...successMessage} />}
        </FollowUpProvider>
    );
};
