import React, { createContext, useCallback, useEffect, useState, FC, ReactNode, FormEvent, ChangeEvent } from "react";
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

interface CustomSuccessProps {
    value?: FeedbackValue;
    message: string;
}

interface FeedbackValueWithPrompt {
    value: FeedbackValue;
    prompt: string;
}

function hasPrompt(v: FeedbackValue | FeedbackValueWithPrompt): v is FeedbackValueWithPrompt {
    return (v as FeedbackValueWithPrompt).prompt !== undefined;
}

export function rawFeedbackValues(input: Array<FeedbackValue | FeedbackValueWithPrompt>) {
    return input.map((v) => (typeof v === "number" ? v : v.value));
}

export interface BaseFeedbackProps {
    label: string;
    onSubmit: (data: FeedbackPayload) => void;
    description: string;
    feedbackOptions?: Array<FeedbackValue | FeedbackValueWithPrompt>;
    renderCustomSuccess?: (props: CustomSuccessProps) => ReactNode;
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
    description: string;
    options: Array<FeedbackValue | FeedbackValueWithPrompt>;
    value?: FeedbackValue;
    setValue: (next: FeedbackValue) => void;
}>({ description: "", options: [], setValue: () => undefined });

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
    const [feedbackPrompt, setFeedbackPrompt] = useState(textAreaLabel);
    const [message, setMessage] = useState("");
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [feedbackSubmittedAnimation, setFeedbackSubmittedAnimation] = useState(false);
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(feedbackValue !== undefined);

    const handleSubmit = useCallback(() => {
        if (!feedbackSubmitted && feedbackValue) {
            onSubmit({ feedbackValue, message });
        }
    }, [feedbackValue, feedbackSubmitted, message, onSubmit]);

    const handleActiveSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
        setFeedbackSubmittedAnimation(true);
        setTimeout(() => setFeedbackSubmitted(true), 250);
    };

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setMessage(e.currentTarget.value);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("beforeunload", handleSubmit);
        }
        return () => {
            window.removeEventListener("beforeunload", handleSubmit);
        };
    }, [handleSubmit]);

    useEffect(() => {
        const option = feedbackOptions.filter((v) => hasPrompt(v) && v.value === feedbackValue)[0];
        setFeedbackPrompt(option && hasPrompt(option) ? option.prompt : textAreaLabel);
    }, [feedbackOptions, feedbackValue, textAreaLabel]);

    const H = headingLevel;

    return (
        <div className={cn("jkl-feedback", className)}>
            <FeedbackContext.Provider
                value={{
                    description,
                    options: feedbackOptions,
                    setValue: setFeedbackValue,
                    value: feedbackValue,
                }}
            >
                {feedbackSubmitted && (
                    <section className="jkl-feedback__success" data-testid="feedback-success">
                        {renderCustomSuccess && renderCustomSuccess({ value: feedbackValue, message })}
                        {!renderCustomSuccess && <SuccessMessage title={successTitle}>{successMessage}</SuccessMessage>}
                    </section>
                )}
                {!feedbackSubmitted && (
                    <form
                        className={cn("jkl-feedback__form", {
                            "jkl-feedback__form--hidden": feedbackSubmittedAnimation,
                        })}
                        onSubmit={handleActiveSubmit}
                    >
                        <H className="jkl-feedback__heading jkl-heading-large">{label}</H>
                        {content}
                        <section
                            ref={animationRef}
                            className={cn("jkl-feedback__submit-wrapper", {
                                "jkl-feedback__submit-wrapper--hidden jkl-layout-spacing--medium-top":
                                    feedbackValue === undefined,
                            })}
                        >
                            <div className="jkl-feedback__submit-content">
                                {showTextArea && (
                                    <TextArea
                                        className="jkl-feedback__message-input"
                                        data-testid="feedback-text"
                                        name="feedback-text"
                                        label={feedbackPrompt}
                                        variant="small"
                                        rows={3}
                                        helpLabel={textAreaHelpLabel}
                                        value={message}
                                        onChange={handleMessageChange}
                                    />
                                )}
                                <SecondaryButton
                                    data-testid="submit-button"
                                    className="jkl-layout-spacing--medium-top"
                                    type="submit"
                                >
                                    {callToActionText}
                                </SecondaryButton>
                            </div>
                        </section>
                    </form>
                )}
            </FeedbackContext.Provider>
        </div>
    );
};
