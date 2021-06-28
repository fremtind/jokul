import React, { ChangeEvent, createContext, FormEvent, ReactNode } from "react";
import { SecondaryButton } from "@fremtind/jkl-button-react";
import { SuccessMessage } from "@fremtind/jkl-message-box-react";
import { TextArea } from "@fremtind/jkl-text-input-react";
import cn from "classnames";
import { HAPPY, NEUTRAL, UNHAPPY, VERY_HAPPY, VERY_UNHAPPY } from "./FeedbackValues";
import { FeedbackOption, FeedbackValue } from "./types";
import { hasPrompt } from "./utils";

export type FeedbackPayload = {
    feedbackValue: FeedbackValue;
    message?: string;
};

interface CustomSuccessProps {
    value?: FeedbackValue;
    message: string;
}
export interface BaseFeedbackProps {
    label: string;
    onSubmit: (data: FeedbackPayload) => void;
    description: string;
    feedbackOptions?: Array<FeedbackValue | FeedbackOption>;
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

interface State {
    feedbackValue: undefined | FeedbackValue;
    feedbackPrompt: string | undefined;
    message: string;
    feedbackSubmitted: boolean;
    feedbackSubmittedAnimation: boolean;
}

export const FeedbackContext = createContext<{
    description: string;
    options: Array<FeedbackValue | FeedbackOption>;
    value?: FeedbackValue;
    setValue: (next: FeedbackValue) => void;
}>({ description: "", options: [], setValue: () => undefined });

export class BaseFeedback extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            feedbackValue: undefined,
            feedbackPrompt: props.textAreaLabel,
            message: "",
            feedbackSubmitted: false,
            feedbackSubmittedAnimation: false,
        };
        if (typeof window !== "undefined") {
            window.addEventListener("beforeunload", this.handleSubmit);
        }
    }

    handleSubmit = () => {
        const { feedbackValue, message, feedbackSubmitted } = this.state;
        if (!feedbackSubmitted && feedbackValue) {
            this.props.onSubmit({ feedbackValue, message });
        }
    };

    handleActiveSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.handleSubmit();
        this.setState({
            ...this.state,
            feedbackSubmittedAnimation: true,
        });
        setTimeout(() => this.setState({ ...this.state, feedbackSubmitted: true }), 250);
    };

    handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        this.setState({ ...this.state, message: e.target.value });

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (this.props.feedbackOptions && prevState.feedbackValue !== this.state.feedbackValue) {
            const option = this.props.feedbackOptions.find(
                (v) => hasPrompt(v) && v.value === this.state.feedbackValue,
            ) as FeedbackOption | undefined;
            this.setState({ ...this.state, feedbackPrompt: option?.prompt ?? this.props.textAreaLabel });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.handleSubmit);

        this.handleSubmit();
    }

    render() {
        const H = this.props.headingLevel;

        return (
            <div className={cn("jkl-feedback", this.props.className)}>
                <FeedbackContext.Provider
                    value={{
                        description: this.props.description,
                        options: this.props.feedbackOptions ?? BaseFeedback.defaultProps.feedbackOptions,
                        setValue: (feedbackValue) => this.setState({ ...this.state, feedbackValue }),
                        value: this.state.feedbackValue,
                    }}
                >
                    {this.state.feedbackSubmitted && (
                        <section className="jkl-feedback__success" data-testid="feedback-success">
                            {this.props.renderCustomSuccess &&
                                this.props.renderCustomSuccess({
                                    value: this.state.feedbackValue,
                                    message: this.state.message,
                                })}
                            {!this.props.renderCustomSuccess && (
                                <SuccessMessage title={this.props.successTitle}>
                                    {this.props.successMessage}
                                </SuccessMessage>
                            )}
                        </section>
                    )}
                    {!this.state.feedbackSubmitted && (
                        <form
                            className={cn("jkl-feedback__form", {
                                "jkl-feedback__form--hidden": this.state.feedbackSubmittedAnimation,
                            })}
                            onSubmit={this.handleActiveSubmit}
                        >
                            <H className="jkl-feedback__heading jkl-heading-large">{this.props.label}</H>
                            {this.props.content}
                            <section
                                className={cn("jkl-feedback__submit-wrapper", {
                                    "jkl-feedback__submit-wrapper--hidden jkl-layout-spacing--medium-top":
                                        this.state.feedbackValue === undefined,
                                })}
                            >
                                <div className="jkl-feedback__submit-content">
                                    {this.props.showTextArea && (
                                        <TextArea
                                            className="jkl-feedback__message-input"
                                            data-testid="feedback-text"
                                            name="feedback-text"
                                            label={this.state.feedbackPrompt ?? ""}
                                            variant="small"
                                            rows={3}
                                            helpLabel={this.props.textAreaHelpLabel}
                                            value={this.state.message}
                                            onChange={this.handleMessageChange}
                                        />
                                    )}
                                    <SecondaryButton
                                        data-testid="submit-button"
                                        className="jkl-layout-spacing--medium-top"
                                        type="submit"
                                    >
                                        {this.props.callToActionText}
                                    </SecondaryButton>
                                </div>
                            </section>
                        </form>
                    )}
                </FeedbackContext.Provider>
            </div>
        );
    }

    static defaultProps = {
        successMessage: "Det hjelper oss i arbeidet med å forbedre våre løsninger",
        successTitle: "Takk for tilbakemeldingen!",
        callToActionText: "Send inn tilbakemelding",
        showTextArea: true,
        textAreaLabel: "Tips oss gjerne om hva vi kan forbedre",
        textAreaHelpLabel: "",
        className: "",
        feedbackOptions: [VERY_UNHAPPY, UNHAPPY, NEUTRAL, HAPPY, VERY_HAPPY],
        headingLevel: "h3",
    };
}
