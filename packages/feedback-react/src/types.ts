import { Dispatch, SetStateAction } from "react";

export type FeedbackOption = {
    label: string;
    value: string | number;
    textAreaLabel?: string;
};

export type FeedbackQuestion = {
    label: string;
    name?: string;
    type: "single" | "multiple" | "text";
    options: FeedbackOption[];
};

interface BaseFeedbackAnswer {
    label: string;
    name: string;
    type: "single" | "multiple" | "text";
}

interface MultiFeedbackAnswer extends BaseFeedbackAnswer {
    type: "multiple";
    value: string[];
}

interface SingleFeedbackAnswer extends BaseFeedbackAnswer {
    type: "single" | "text";
    value: string;
}

export type FeedbackAnswer = SingleFeedbackAnswer | MultiFeedbackAnswer;

export type FeedbackType = {
    feedbackValue: string | number;
    message?: string;
};

export type FeedbackState = {
    value?: FeedbackOption;
    setValue: Dispatch<SetStateAction<FeedbackOption | undefined>>;
    message?: string;
    setMessage: Dispatch<SetStateAction<string | undefined>>;
    submitted: boolean;
    handleSubmit: () => void;
};

export type FollowUpStep = {
    number: number;
    question: FeedbackQuestion;
    isLast: boolean;
};

export type FollowupState = {
    values: FeedbackAnswer[] | undefined;
    step: FollowUpStep;
    submitted: boolean;
    handleNext: (question: FeedbackQuestion, value: string | string[]) => void;
};
