import React, { ReactNode, useState } from "react";
import { Followup } from "./followup/Followup";
import { getQuestionFromType } from "./utils";
import { MainQuestion } from "./main-question/MainQuestion";
import { FeedbackContextProvider } from "./feedbackContext";
import { AddonQuestion, ContactQuestion } from "./questions";
import { FeedbackAnswer, FeedbackOption, FeedbackType, FollowupQuestion } from "./types";
import { FeedbackSuccess } from "./FeedbackSuccess";

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

export const Feedback: React.VFC<Props> = ({
    type,
    label,
    options,
    addOnQuestion,
    successMessage,
    onSubmit,
    followup,
    contactQuestion,
}) => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [followupStarted, setFollowupStarted] = useState(false);
    const [followupSubmitted, setFollowupSubmitted] = useState(false);
    const [contactSubmitted, setContactSubmitted] = useState(false);

    const MainQuestionComp = getQuestionFromType(type);

    return (
        <div className="jkl-feedback">
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
                {!followupStarted && (
                    <MainQuestion onSubmit={onSubmit}>
                        <MainQuestionComp label={label} options={options} />
                        {addOnQuestion && <AddonQuestion {...addOnQuestion} />}
                        {successMessage && <FeedbackSuccess {...successMessage} />}
                    </MainQuestion>
                )}
                {feedbackSubmitted && !contactSubmitted && followup && (
                    <Followup onSubmit={followup.onSubmit}>
                        {followup.questions.map((question) => {
                            const Comp = getQuestionFromType(question.type);
                            return <Comp key={question.label} {...question} />;
                        })}
                        {followup.successMessage && <FeedbackSuccess {...followup.successMessage} />}
                    </Followup>
                )}
                {/* Show contact question after followup, or after feedback if no followup */}
                {((!followup && feedbackSubmitted) || followupSubmitted) && contactQuestion && (
                    <ContactQuestion {...contactQuestion} />
                )}
            </FeedbackContextProvider>
        </div>
    );
};
