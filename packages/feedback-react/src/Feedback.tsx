import React, { ReactNode, useState } from "react";
import { Followup } from "./followup/Followup";
import { MainQuestion } from "./main-question/MainQuestion";
import { FeedbackContextProvider } from "./feedbackContext";
import { ContactQuestion } from "./questions";
import { FeedbackOption, FeedbackType } from "./types";

type FollowupProps = React.ComponentProps<typeof Followup>;
type ContactQuestionProps = React.ComponentProps<typeof ContactQuestion>;

interface Props {
    className?: string;
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

    followup?: FollowupProps;
    contactQuestion?: ContactQuestionProps;
}

export const Feedback: React.VFC<Props> = ({ className, followup, contactQuestion, ...mainQuestionProps }) => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [followupStarted, setFollowupStarted] = useState(false);
    const [followupSubmitted, setFollowupSubmitted] = useState(false);
    const [contactSubmitted, setContactSubmitted] = useState(false);

    return (
        <div className={`jkl-feedback ${className || ""}`} aria-live="polite">
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
                {!followupStarted && <MainQuestion {...mainQuestionProps} />}
                {feedbackSubmitted && !contactSubmitted && followup && <Followup {...followup} />}
                {/* Show contact question after followup, or after feedback if no followup */}
                {((!followup && feedbackSubmitted) || followupSubmitted) && contactQuestion && (
                    <ContactQuestion {...contactQuestion} />
                )}
            </FeedbackContextProvider>
        </div>
    );
};
