import React, { ComponentProps, useEffect, useState } from "react";
import cn from "classnames";

import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { SuccessMessage } from "@fremtind/jkl-message-box-react";

import { useFeedback } from "./useFeedback";
import { FeedbackType, FeedbackAnswer, FeedbackQuestion } from "./types";
import { FollowupWizard } from "./FollowupWizard";
import { MainQuestion } from "./MainQuestion";

type MainProps = Omit<ComponentProps<typeof MainQuestion>, "feedbackState">;
interface Props extends MainProps {
    onSubmit: (f: FeedbackType) => void;
    followUp?: {
        questions: FeedbackQuestion[];
        onSubmit: (values: FeedbackAnswer[]) => void;
    };
}

export const Feedback = ({ onSubmit, followUp, ...mainQuestionProps }: Props) => {
    const feedbackState = useFeedback(onSubmit);
    const [showFollowup, setShowFollowup] = useState(!!followUp);
    const [followupStarted, setFollowupStarted] = useState(false);

    useEffect(() => setShowFollowup(!!followUp), [followUp]);

    return (
        <div className={cn("jkl-feedback")}>
            {!feedbackState.submitted && <MainQuestion {...mainQuestionProps} feedbackState={feedbackState} />}
            {feedbackState.submitted && !followupStarted && (
                <div data-testid="jkl-feedback__feedback-success" className="jkl-feedback__fade-in">
                    <SuccessMessage title="Takk for tilbakemeldingen!">
                        Husk at vi ikke kan svare deg her. Lurer du på noe annet ta kontakt med din bankrådgiver.
                    </SuccessMessage>
                    {showFollowup && (
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
                            <TertiaryButton onClick={() => setShowFollowup(false)}>Nei takk</TertiaryButton>
                        </>
                    )}
                </div>
            )}
            {followUp && followupStarted && feedbackState.submitted && (
                <FollowupWizard onSubmit={followUp.onSubmit} questions={followUp.questions} />
            )}
        </div>
    );
};
