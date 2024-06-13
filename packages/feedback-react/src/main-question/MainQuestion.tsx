import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { ReactNode, useEffect, FC, ComponentProps } from "react";
import { Feedback } from "../Feedback";
import { useFeedbackContext } from "../feedbackContext";
import { FeedbackSuccess } from "../FeedbackSuccess";
import { AddonQuestion } from "../questions";
import { FeedbackOption, FeedbackType } from "../types";
import { getQuestionFromType } from "../utils";
import { MainQuestionContextProvider } from "./mainQuestionContext";
import { useMainQuestion } from "./useMainQuestion";

const defaultSuccessMessage = {
    title: "Takk for tilbakemeldingen!",
    children:
        "Husk at vi ikke kan besvare meldinger fra dette skjemaet. Kontakt gjerne din forsikringsrådgiver om du har flere spørsmål.",
};

type Props = Pick<ComponentProps<typeof Feedback>, "addOnQuestion"> & {
    type: "radio" | "smiley";
    label: string;
    helpLabel?: string;
    options: FeedbackOption[];
    successMessage?: {
        title: string;
        children: ReactNode;
    };
    onSubmit: (value: FeedbackType) => void;
};

export const MainQuestion: FC<Props> = ({
    label,
    options,
    type,
    addOnQuestion,
    successMessage = defaultSuccessMessage,
    helpLabel,
    onSubmit,
}) => {
    const mainQuestionState = useMainQuestion(onSubmit);

    const { setFeedbackSubmitted, contactSubmitted } = useFeedbackContext();
    const { handleSubmit, currentValue, setCurrentValue, submitted } = mainQuestionState;
    const [submitWrapperRef] = useAnimatedHeight<HTMLDivElement>(currentValue !== undefined);

    useEffect(() => {
        setFeedbackSubmitted(submitted);
    }, [submitted, setFeedbackSubmitted]);

    const MainQuestionComp = getQuestionFromType(type);

    return (
        <>
            {!submitted && (
                <MainQuestionContextProvider state={mainQuestionState}>
                    <MainQuestionComp label={label} options={options} helpLabel={helpLabel} />
                    <div
                        ref={submitWrapperRef}
                        className={cn({
                            "jkl-feedback__submit-wrapper": true,
                            "jkl-feedback__submit-wrapper--hidden": currentValue === undefined,
                        })}
                    >
                        {addOnQuestion && (
                            <AddonQuestion
                                helpLabel={typeof addOnQuestion === "object" ? addOnQuestion.helpLabel : undefined}
                                label={typeof addOnQuestion === "object" ? addOnQuestion.label : undefined}
                            />
                        )}
                        <div className="jkl-spacing-xl--top">
                            <PrimaryButton onClick={handleSubmit} className="jkl-spacing-xl--right">
                                Send
                            </PrimaryButton>
                            <TertiaryButton onClick={() => setCurrentValue(undefined)}>Avbryt</TertiaryButton>
                        </div>
                    </div>
                </MainQuestionContextProvider>
            )}
            {submitted && !contactSubmitted && <FeedbackSuccess {...successMessage} />}
        </>
    );
};
