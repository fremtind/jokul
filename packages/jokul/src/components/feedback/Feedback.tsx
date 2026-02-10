import React, { type ReactElement, type ReactNode, useState } from "react";
import type { BaseTextAreaProps } from "../text-area/types.js";
import { FeedbackContextProvider } from "./feedbackContext.js";
import { Followup } from "./followup/Followup.js";
import { MainQuestion } from "./main-question/MainQuestion.js";
import { ContactQuestion } from "./questions/ContactQuestion.js";
import type {
    ContactQuestionProps,
    FeedbackOption,
    FeedbackType,
    FollowupProps,
} from "./types.js";

/**
 * @deprecated denne komponenten er i ferd med å fases ut, og vil bli erstattet av mer fleksible og mindre styrende komponenter for innsamling av tilbakemeldinger. Ta kontakt med oss i Jøkul-teamet hvis du ønsker å bruke eller bidra til utviklingen av de nye komponentene.
 */
export type FeedbackProps = {
    className?: string;
    /** Velg typen alternativer, Smiley eller RadioButtons. */
    type: "radio" | "smiley";
    /** Spørsmålet som stilles til brukeren */
    label: string;
    /** Hjelpetekst til hovedspørsmålet */
    helpLabel?: string;
    /** Svaralternativer til spørsmålet */
    options: FeedbackOption[];
    /** Dersom du vil stille et åpent spørsmål i tillegg kan du sette denne til en truthy verdi */
    addOnQuestion?:
        | {
              /** Spørsmålet du vil stille */
              label?: string;
              /** Eventuell hjelpetekst. Om du ikke spesifiserer en vil det vises en påminnelse om å ikke skrive inn personling informasjon. */
              helpLabel?: string;
          }
        | boolean;
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
    /**
     * Hvis du ønsker at Feedback formen skal eksponeres som et landmark kan du sende inn
     * hva du ønsker at en skjermleser skal kalle den her. Bare eksponer Feedback som et
     * landmark på sider der den er en viktig del av innholdet, feks en kvitteringsside
     * eller et annet sted det å kunne gi tilbakemelding vil føles naturlig eller forventet
     * for brukeren.
     */
    landmarkLabel?: string;
} & Pick<BaseTextAreaProps, "counter">;

export const Feedback = ({
    className,
    followup,
    contactQuestion,
    counter,
    landmarkLabel,
    ...mainQuestionProps
}: FeedbackProps): ReactElement => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [followupStarted, setFollowupStarted] = useState(false);
    const [followupSubmitted, setFollowupSubmitted] = useState(false);
    const [contactSubmitted, setContactSubmitted] = useState(false);

    if (process.env.NODE_ENV !== "production") {
        console.error(
            "WARNING: Feedback component has been deprecated and will be removed in some future version of the library",
        );
    }

    return (
        <div
            className={`jkl-feedback ${className || ""}`}
            data-testid="feedback"
        >
            <FeedbackContextProvider
                value={{
                    feedbackSubmitted,
                    followupStarted,
                    followupSubmitted,
                    contactSubmitted,
                    counter,
                    landmarkLabel,
                    setFeedbackSubmitted,
                    setFollowupStarted,
                    setFollowupSubmitted,
                    setContactSubmitted,
                }}
            >
                {!followupStarted && <MainQuestion {...mainQuestionProps} />}
                {feedbackSubmitted && !contactSubmitted && followup && (
                    <Followup {...followup} />
                )}
                {contactQuestion && (
                    <div aria-live="polite">
                        {/* Show contact question after followup, or after feedback if no followup */}
                        {((!followup && feedbackSubmitted) ||
                            followupSubmitted) && (
                            <ContactQuestion {...contactQuestion} />
                        )}
                    </div>
                )}
            </FeedbackContextProvider>
        </div>
    );
};
