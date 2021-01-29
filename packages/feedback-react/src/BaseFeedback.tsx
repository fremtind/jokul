import React, { createContext, useCallback, useEffect, useState, FC, ReactNode } from "react";
import cn from "classnames";
import { TextArea } from "@fremtind/jkl-text-input-react";
import { SecondaryButton } from "@fremtind/jkl-button-react";
import { SuccessMessage } from "@fremtind/jkl-message-box-react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { VERY_UNHAPPY, UNHAPPY, NEUTRAL, HAPPY, VERY_HAPPY } from "./FeedbackValues";
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
    renderCustomSuccess?: (props: { value: FeedbackValue; message: string }) => ReactNode;
    successTitle?: string;
    successMessage?: string;
    className?: string;
    callToActionText?: string;
    showTextArea?: boolean;
    textAreaLabel?: string;
    textAreaHelpLabel?: string;
    headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
}

interface Props extends BaseFeedbackProps {
    content: ReactNode;
}

export const FeedbackContext = createContext<{
    options: FeedbackValue[];
    value?: FeedbackValue;
    setValue: (next: FeedbackValue) => void;
}>({ options: [], setValue: () => undefined });

export const BaseFeedback: FC<Props> = ({
    label,
    onSubmit,
    description,
    renderCustomSuccess,
    successMessage = "Det hjelper oss i arbeidet med å forbedre våre løsninger",
    successTitle = "Takk for tilbakemeldingen!",
    callToActionText = "Send inn tilbakemelding",
    showTextArea = true,
    textAreaLabel = "Tips oss gjerne om hva vi kan forbedre",
    textAreaHelpLabel = "",
    className = "",
    feedbackOptions = [VERY_UNHAPPY, UNHAPPY, NEUTRAL, HAPPY, VERY_HAPPY],
    headingLevel = "h3",
    content,
}) => {
    const [feedbackValue, setFeedbackValue] = useState<FeedbackValue>();
    const [message, setMessage] = useState("");
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [feedbackSubmittedAnimation, setFeedbackSubmittedAnimation] = useState(false);
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(feedbackValue !== undefined);

    const handleSubmit = useCallback(() => {
        if (!feedbackSubmitted && feedbackValue) {
            onSubmit({ feedbackValue, message });
        }
    }, [feedbackValue, feedbackSubmitted, message, onSubmit]);

    const handleActiveSubmit = () => {
        handleSubmit();
        setFeedbackSubmittedAnimation(true);
        setTimeout(() => setFeedbackSubmitted(true), 250);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("beforeunload", handleSubmit);
        }
        return () => {
            window.removeEventListener("beforeunload", handleSubmit);
        };
    }, [handleSubmit]);

    const H = headingLevel;

    return (
        <FeedbackContext.Provider
            value={{ options: feedbackOptions, setValue: setFeedbackValue, value: feedbackValue }}
        >
            {feedbackSubmitted && (
                <section className="jkl-feedback__success">
                    {renderCustomSuccess &&
                        feedbackValue !== undefined &&
                        renderCustomSuccess({ value: feedbackValue, message })}
                    {!renderCustomSuccess && <SuccessMessage title={successTitle}>{successMessage}</SuccessMessage>}
                </section>
            )}
            {!feedbackSubmitted && (
                <form
                    className={cn("jkl-feedback", { "jkl-feedback--hidden": feedbackSubmittedAnimation }, className)}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="jkl-feedback__heading">
                        <H className="jkl-heading-large">{label}</H>
                        {description && <p className="jkl-lead">{description}</p>}
                    </div>
                    <fieldset className="jkl-feedback__fieldset">{content}</fieldset>
                    <section
                        ref={animationRef}
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
            )}
        </FeedbackContext.Provider>
    );
};
