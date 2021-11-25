import React, { ReactElement, ReactNode, useState, ComponentProps } from "react";
import { Followup } from "./followup/Followup";
import { MainQuestion } from "./main-question/MainQuestion";
import { FeedbackContextProvider } from "./feedbackContext";
import { ContactQuestion } from "./questions";
import { FeedbackOption, FeedbackType } from "./types";

type FollowupProps = ComponentProps<typeof Followup>;
type ContactQuestionProps = ComponentProps<typeof ContactQuestion>;

interface Props {
    className?: string;
    /** Velg typen alternativer, Slider eller RadioButtons. */
    type: "slider" | "radio" | "smiley";
    /** Spørsmålet som stilles til brukeren */
    label: string;
    /** Svaralternativer til spørsmålet */
    options: FeedbackOption[];
    /** Dersom du vil stille et åpent spørsmål i tillegg kan du legge det til her */
    addOnQuestion?: {
        /** Spørsmålet du vil stille */
        label: string;
        /** Eventuell hjelpetekst. Om du ikke spesifiserer en vil det vises en påminnelse om å ikke skrive inn personling informasjon. */
        helpLabel?: string;
    };
    /** Lar deg tilpasse meldingen som kommer når brukeren sender inn tilbakemeldingen.  */
    successMessage?: {
        title: string;
        children: ReactNode;
    };
    onSubmit: (value: FeedbackType) => void;

    followup?: FollowupProps;
    contactQuestion?: ContactQuestionProps;
}

export const Feedback = ({ className, followup, contactQuestion, ...mainQuestionProps }: Props): ReactElement => {
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
