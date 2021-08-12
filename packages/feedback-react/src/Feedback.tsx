/* SKETCH:

<Feedback>
    <MainQuestion onSubmit={fn}>
        <SingleChoiceQuestion {...questionProps} />
        <AddonQuestion {...addonProps} />
        <Success {...successProps} />
    </MainQuestion>
    <Followup onSubmit={fn}>
        <SingleChoiceQuestion {...questionProps} />
        <MultipleChoiceQuestion {...questionProps} />
        <TextQuestion {...questionProps} />
        <Success {...successProps} />
    </Followup>
    <Contact {...contactProps} />
</Feedback>

*/

/* PRESET:

const SomePreset = ({ children }) => (
    <Feedback>
        <MainQuestion onSubmit={fn}>
            <SingleChoiceQuestion {...questionProps} />
            <AddonQuestion {...addonProps} />
            <Success {...successProps} />
        </MainQuestion>
        {children}
    </Feedback>
)

<SomePreset>
    <Followup>
        // questions here
    </Followup>
</SomePreset>

*/

import React, { useState } from "react";
import { Followup } from "./followup/Followup";
import { getChildrenOfType } from "./utils";
import { MainQuestion } from "./main-question/MainQuestion";
import { FeedbackContextProvider } from "./feedbackContext";
import { ContactQuestion } from "./questions";

const getFollowupComponents = getChildrenOfType(Followup);
const getMainQuestionComponents = getChildrenOfType(MainQuestion);
const getContactQuestionComponents = getChildrenOfType(ContactQuestion);

export const Feedback: React.FC = ({ children }) => {
    const mainQuestionComponents = getMainQuestionComponents(children);
    const followupComponents = getFollowupComponents(children);
    const followup = followupComponents?.[0];
    const contactQuestionComponents = getContactQuestionComponents(children);
    const contactQuestion = contactQuestionComponents?.[0];

    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [followupStarted, setFollowupStarted] = useState(false);
    const [followupSubmitted, setFollowupSubmitted] = useState(false);
    const [contactSubmitted, setContactSubmitted] = useState(false);

    if (!mainQuestionComponents?.length) {
        console.warn("Feedback requires a Question as a child");
        return null;
    }

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
                {!followupStarted && mainQuestionComponents[0]}
                {feedbackSubmitted && !contactSubmitted && followup}
                {/* Show contact question after followup, or after feedback if no followup */}
                {((!followup && feedbackSubmitted) || followupSubmitted) && contactQuestion}
            </FeedbackContextProvider>
        </div>
    );
};
