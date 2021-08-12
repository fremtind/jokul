import { Dispatch, SetStateAction } from "react";

export type FeedbackOption<T = string | number> = {
    label: string;
    value: T;
    textAreaLabel?: string;
};

export interface BaseFeedbackQuestion {
    label: string;
    name?: string;
    type: "single" | "multiple" | "text";
}

export interface ChoiceFeedbackQuestion extends BaseFeedbackQuestion {
    type: "single" | "multiple";
    options: FeedbackOption[];
}

export interface TextFeedbackQuestion extends BaseFeedbackQuestion {
    type: "text";
}

export type FeedbackQuestion = ChoiceFeedbackQuestion | TextFeedbackQuestion;

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
    feedbackValue: number | string | Array<string | number>;
    message?: string;
};

export type FeedbackState = {
    currentValue?: FeedbackOption | FeedbackOption[];
    setCurrentValue: Dispatch<SetStateAction<FeedbackOption | FeedbackOption[] | undefined>>;
    message?: string;
    setMessage: Dispatch<SetStateAction<string | undefined>>;
    submitted: boolean;
    handleSubmit: () => void;
};

export type FollowUpStep = {
    number: number;
    question: BaseFeedbackQuestion;
    isLast: boolean;
};

export type FollowupState = {
    questions: BaseFeedbackQuestion[];
    values: FeedbackAnswer[] | undefined;
    currentValue?: FeedbackOption | FeedbackOption[];
    step: FollowUpStep;
    submitted: boolean;
    handleNext: (question: BaseFeedbackQuestion, value: string | string[]) => void;
    handleAbort: () => void;
    setCurrentValue: Dispatch<SetStateAction<FeedbackOption | FeedbackOption[] | undefined>>;
};

export interface QuestionProps {
    type?: "text" | "single" | "multiple";
    label: string;
    name?: string;
    helpLabel?: string;
    options?: FeedbackOption[];
}
