import React, { ReactElement, ReactNode, useState, ComponentProps } from "react";
import { FeedbackContextProvider } from "./feedbackContext";
import { Followup } from "./followup/Followup";
import { MainQuestion } from "./main-question/MainQuestion";
import { ContactQuestion } from "./questions";
import { FeedbackOption, FeedbackType } from "./types";

type FollowupProps = ComponentProps<typeof Followup>;
type ContactQuestionProps = ComponentProps<typeof ContactQuestion>;

interface Props {
    className?: string;
    /** Velg typen alternativer, Smiley eller RadioButtons. */
    type: "radio" | "smiley";
    /** Spørsmålet som stilles til brukeren */
    label: string;
    /** Hjelpetekst til hovedspørsmålet */
    helpLabel?: string;
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
    /**
     * Funksjon for å håndtere innsending av tilbakemelding
     * @param value Verdien av tilbakemeldingen. Dette er et objekt med følgende egenskaper:
     * - `feedbackValue`: Selve verdien av tilbakemeldingen (format varierer etter spørsmålstype)
     * - `intentionalSubmit`: Er `true` hvis brukeren aktivt sendte inn skjemaet, `false` hvis skjemaet ble sendt inn automatisk
     * - `message`: Eventuell utfyllende melding fra bruker. Blir kun sendt inn ved aktiv innsending
     */
    onSubmit: (value: FeedbackType) => void;

    followup?: FollowupProps;
    contactQuestion?: ContactQuestionProps;
    /** Begrenser tekstlengde i TextArea **/
    maxLength?: number;
}

export const Feedback = ({
    className,
    followup,
    contactQuestion,
    maxLength,
    ...mainQuestionProps
}: Props): ReactElement => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [followupStarted, setFollowupStarted] = useState(false);
    const [followupSubmitted, setFollowupSubmitted] = useState(false);
    const [contactSubmitted, setContactSubmitted] = useState(false);

    return (
        <div className={`jkl-feedback ${className || ""}`} data-testid="feedback">
            <FeedbackContextProvider
                value={{
                    feedbackSubmitted,
                    followupStarted,
                    followupSubmitted,
                    contactSubmitted,
                    maxLength,
                    setFeedbackSubmitted,
                    setFollowupStarted,
                    setFollowupSubmitted,
                    setContactSubmitted,
                }}
            >
                {!followupStarted && <MainQuestion {...mainQuestionProps} />}
                {feedbackSubmitted && !contactSubmitted && followup && <Followup {...followup} />}
                {contactQuestion && (
                    <div aria-live="polite">
                        {/* Show contact question after followup, or after feedback if no followup */}
                        {((!followup && feedbackSubmitted) || followupSubmitted) && (
                            <ContactQuestion {...contactQuestion} />
                        )}
                    </div>
                )}
            </FeedbackContextProvider>
        </div>
    );
};
