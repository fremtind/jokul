import React, { ReactNode, useEffect, useRef, useState, FC } from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../..";
import { useFeedbackContext } from "../feedbackContext";
import { FeedbackSuccess } from "../FeedbackSuccess";
import { FeedbackAnswer, FollowupQuestion } from "../types";
import { getQuestionFromType } from "../utils";
import { FollowUpProvider } from "./followupContext";
import { useFollowup } from "./useFollowup";

const defaultSuccessMessage = {
    title: "Takk, igjen!",
    children:
        "Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Det hjelper oss med å gjøre nettsidene bedre for deg og alle andre som bruker dem.",
};

interface Props {
    /** Spørsmålet/ene som skal stilles. Kan være av typen radio, checkbox eller text */
    questions: FollowupQuestion[];
    /** Lar deg tilpasse meldingen som kommer når brukeren har svart på spørsmålene.  */
    successMessage?: {
        title: string;
        children: ReactNode;
    };
    onSubmit: (values: FeedbackAnswer[]) => void;
}

export const Followup: FC<Props> = ({ questions, successMessage = defaultSuccessMessage, onSubmit }) => {
    const [noThanks, setNoThanks] = useState(false);
    const focusRef = useRef<HTMLParagraphElement>(null);
    const followupState = useFollowup(questions, onSubmit);
    const { handleAbort, handleNext, step, submitted } = followupState;
    const { followupStarted, setFollowupStarted, setFollowupSubmitted, contactSubmitted, landmarkLabel } =
        useFeedbackContext();

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
        <div aria-live="polite">
            <FollowUpProvider state={followupState}>
                {!followupStarted && (
                    <div className="jkl-feedback__fade-in">
                        <p className="jkl-heading-4 jkl-spacing-xl--top jkl-spacing-xs--bottom">
                            Har du tid til å svare på noen flere spørsmål?
                        </p>
                        <p className="jkl-body jkl-spacing-xl--bottom">
                            Det tar kun et minutt, og hjelper oss å lage bedre løsninger for deg.
                        </p>
                        <PrimaryButton onClick={() => setFollowupStarted(true)} className="jkl-spacing-xl--right">
                            Jeg har tid!
                        </PrimaryButton>
                        <TertiaryButton onClick={() => setNoThanks(true)}>Nei takk</TertiaryButton>
                    </div>
                )}
                {!submitted && followupStarted && (
                    <form onSubmit={handleNext} className="jkl-feedback__fade-in" aria-label={landmarkLabel}>
                        <p className="jkl-feedback__step-counter" ref={focusRef}>
                            Steg {step.number + 1} av {questions.length}
                        </p>
                        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                        <QuestionComponent {...questions[step.number]} autoFocus key={step.number} />
                        <div className="jkl-spacing-xl--top" aria-live="off">
                            <Button type="submit">{step.isLast ? "Send inn" : "Neste"}</Button>
                            <TertiaryButton onClick={handleAbort} className="jkl-spacing-xl--left">
                                Avbryt
                            </TertiaryButton>
                        </div>
                    </form>
                )}
                {submitted && !contactSubmitted && <FeedbackSuccess {...successMessage} />}
            </FollowUpProvider>
        </div>
    );
};
