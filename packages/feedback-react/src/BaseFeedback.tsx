import React, { createContext, useCallback, useEffect, useState } from "react";
import cn from "classnames";
import { TextArea } from "@fremtind/jkl-text-input-react";
import { SecondaryButton } from "@fremtind/jkl-button-react";
import { SuccessMessage } from "@fremtind/jkl-message-box-react";
import { FeedbackValue } from "./types";

export type FeedbackPayload = {
    feedbackValue: FeedbackValue;
    message?: string;
};
export interface BaseFeedbackProps {
    label: string;
    onSubmit: (data: FeedbackPayload) => void;
    description?: string;
    feedbackOptions?: FeedbackValue[];
    successTitle?: string;
    successMessage?: string;
    className?: string;
    callToActionText?: string;
    showTextArea?: boolean;
    textAreaLabel?: string;
    textAreaHelpLabel?: string;
    headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
}

export const FeedbackContext = createContext<{
    options: FeedbackValue[];
    value?: FeedbackValue;
    setValue: (next: FeedbackValue) => void;
}>({ options: [], setValue: () => undefined });

export const BaseFeedback: React.FC<BaseFeedbackProps> = ({
    label,
    onSubmit,
    description,
    successMessage = "Det hjelper oss i arbeidet med å forbedre våre løsninger",
    successTitle = "Takk for tilbakemeldingen!",
    callToActionText = "Send inn tilbakemelding",
    showTextArea = true,
    textAreaLabel = "Tips oss gjerne om hva vi kan forbedre",
    textAreaHelpLabel = "",
    className = "",
    feedbackOptions = [1, 2, 3, 4, 5],
    headingLevel = "h3",
    children,
}) => {
    const [feedbackValue, setFeedbackValue] = useState<FeedbackValue>();
    const [message, setMessage] = useState("");
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleSubmit = useCallback(() => {
        if (!feedbackSubmitted && feedbackValue) {
            onSubmit({ feedbackValue, message });
        }
    }, [feedbackValue, feedbackSubmitted, message, onSubmit]);

    const handleActiveSubmit = () => {
        setFeedbackSubmitted(true);
        handleSubmit();
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("beforeunload", handleSubmit);
        }
        return () => {
            window.removeEventListener("beforeunload", handleSubmit);
        };
    }, [handleSubmit]);

    if (feedbackSubmitted) {
        return <SuccessMessage title={successTitle}>{successMessage}</SuccessMessage>;
    }

    const H = headingLevel;

    return (
        <FeedbackContext.Provider
            value={{ options: feedbackOptions, setValue: setFeedbackValue, value: feedbackValue }}
        >
            <form className={`jkl-feedback ${className}`} onSubmit={(e) => e.preventDefault()}>
                <div className="jkl-feedback__heading">
                    <H className="jkl-heading-large">{label}</H>
                    {description && <p className="jkl-lead">{description}</p>}
                </div>
                <fieldset className="jkl-feedback__fieldset">{children}</fieldset>
                <section
                    className={cn("jkl-feedback__input-submit", {
                        "jkl-feedback__input-submit--hidden jkl-layout-spacing--medium-top":
                            feedbackValue === undefined,
                    })}
                >
                    {showTextArea && (
                        <TextArea
                            data-testid="feedback-text"
                            name="feedback-text"
                            label={textAreaLabel}
                            variant="small"
                            rows={3}
                            helpLabel={textAreaHelpLabel}
                            value={message}
                            onChange={(e) => setMessage(e.currentTarget.value)}
                        />
                    )}
                    <SecondaryButton
                        data-testid="submit-button"
                        className="jkl-layout-spacing--medium-top"
                        onClick={handleActiveSubmit}
                    >
                        {callToActionText}
                    </SecondaryButton>
                </section>
            </form>
        </FeedbackContext.Provider>
    );
};
