import React, { ReactNode, useState } from "react";
import { Followup } from "./followup/Followup";
import { MainQuestion } from "./main-question/MainQuestion";
import { FeedbackContextProvider } from "./feedbackContext";
import { ContactQuestion } from "./questions";
import { FeedbackAnswer, FeedbackOption, FeedbackType, FollowupQuestion } from "./types";

interface Props {
    // Props for hoved- og tilleggsspørsmål:
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

    // Props for oppfølgingsspørsmål:
    followup?: {
        questions: FollowupQuestion[];
        onSubmit: (values: FeedbackAnswer[]) => void;
        successMessage?: {
            title: string;
            children: ReactNode;
        };
    };

    // Props for kontaktinfo:
    contactQuestion?: {
        label?: string;
        sendButtonLabel?: string;
        withPhone?: boolean;
        children?: ReactNode;
        onSubmit: (values: { email: string; phone?: string }) => void;
    };
}

export const Feedback: React.VFC<Props> = ({ followup, contactQuestion, ...mainQuestion }) => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [followupStarted, setFollowupStarted] = useState(false);
    const [followupSubmitted, setFollowupSubmitted] = useState(false);
    const [contactSubmitted, setContactSubmitted] = useState(false);

    return (
        <div className="jkl-feedback" aria-live="polite">
            <FeedbackContextProvider
                value={{
                    feedbackSubmitted,
                    followupStarted,
                    followupSubmitted,
                    contactSubmitted,
                    setFeedbackSubmitted,
                    setFollowupStarted,
                    setFollowupSubmitted,
                    setContactSubmitted,
                }}
            >
                {!followupStarted && <MainQuestion {...mainQuestion} />}
                {feedbackSubmitted && !contactSubmitted && followup && <Followup {...followup} />}
                {/* Show contact question after followup, or after feedback if no followup */}
                {((!followup && feedbackSubmitted) || followupSubmitted) && contactQuestion && (
                    <ContactQuestion {...contactQuestion} />
                )}
            </FeedbackContextProvider>
        </div>
    );
};
