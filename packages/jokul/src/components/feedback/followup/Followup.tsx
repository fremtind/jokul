import React, { type FC, useEffect, useRef, useState } from "react";
import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
} from "../../button/Button.js";
import { FeedbackSuccess } from "../FeedbackSuccess.js";
import { useFeedbackContext } from "../feedbackContext.js";
import type { FollowupProps } from "../types.js";
import { getQuestionFromType } from "../utils.js";
import { FollowUpProvider } from "./followupContext.js";
import { useFollowup } from "./useFollowup.js";

const defaultSuccessMessage = {
    title: "Takk, igjen!",
    children:
        "Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
};

export const Followup: FC<FollowupProps> = ({
    questions,
    successMessage = defaultSuccessMessage,
    onSubmit,
}) => {
    const [noThanks, setNoThanks] = useState(false);
    const focusRef = useRef<HTMLParagraphElement>(null);
    const followupState = useFollowup(questions, onSubmit);
    const { handleAbort, handleNext, step, submitted } = followupState;
    const {
        followupStarted,
        setFollowupStarted,
        setFollowupSubmitted,
        contactSubmitted,
        landmarkLabel,
    } = useFeedbackContext();

    useEffect(() => {
        if (step.number === 0) {
            return;
        }
        focusRef.current?.focus();
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
        <div aria-live="polite">
            <FollowUpProvider state={followupState}>
                {!followupStarted && (
                    <div className="jkl-feedback__fade-in">
                        <p className="jkl-heading-4 jkl-spacing-40--top jkl-spacing-8--bottom">
                            Har du tid til å svare på noen flere spørsmål?
                        </p>
                        <p className="jkl-body jkl-spacing-40--bottom">
                            Det tar kun et minutt, og hjelper oss å lage bedre
                            løsninger for deg.
                        </p>
                        <PrimaryButton
                            onClick={() => setFollowupStarted(true)}
                            className="jkl-spacing-40--right"
                        >
                            Jeg har tid!
                        </PrimaryButton>
                        <TertiaryButton onClick={() => setNoThanks(true)}>
                            Nei takk
                        </TertiaryButton>
                    </div>
                )}
                {!submitted && followupStarted && (
                    <form
                        onSubmit={handleNext}
                        className="jkl-feedback__fade-in"
                        aria-label={landmarkLabel}
                    >
                        <p
                            className="jkl-feedback__step-counter"
                            ref={focusRef}
                        >
                            Steg {step.number + 1} av {questions.length}
                        </p>
                        <QuestionComponent
                            {...questions[step.number]}
                            // eslint-disable-next-line jsx-a11y/no-autofocus
                            autoFocus
                            key={step.number}
                        />
                        <div className="jkl-spacing-40--top" aria-live="off">
                            <Button type="submit">
                                {step.isLast ? "Send inn" : "Neste"}
                            </Button>
                            <TertiaryButton
                                onClick={handleAbort}
                                className="jkl-spacing-40--left"
                            >
                                Avbryt
                            </TertiaryButton>
                        </div>
                    </form>
                )}
                {submitted && !contactSubmitted && (
                    <FeedbackSuccess {...successMessage} />
                )}
            </FollowUpProvider>
        </div>
    );
};
