import { Dispatch, SetStateAction } from "react";

export type FeedbackOption<T = string | number> = {
    label: string;
    value: T;
    textAreaLabel?: string;
};

export type QuestionType = "radio" | "checkbox" | "text" | "slider";

interface BaseQuestion {
    type: QuestionType;
    label: string;
    name?: string;
}

interface RadioQuestion extends BaseQuestion {
    type: "radio";
    options: FeedbackOption[];
}

interface CheckboxQuestion extends BaseQuestion {
    type: "checkbox";
    options: FeedbackOption[];
}

interface SliderQuestion extends BaseQuestion {
    type: "slider";
    options: FeedbackOption<number>[];
}

interface TextQuestion extends BaseQuestion {
    type: "text";
}

export type MainQuestion = RadioQuestion | SliderQuestion;
export type FollowupQuestion = MainQuestion | TextQuestion | CheckboxQuestion;

/* interface BaseFollowupQuestion {
    label: string;
    name?: string;
    type: QuestionType;
}

export interface ChoiceFollowupQuestion extends BaseFollowupQuestion {
    type: "radio" | "checkbox";
    options: FeedbackOption[];
}

export interface SliderFeedbackQuestion extends BaseFollowupQuestion {
    type: "slider";
    options: FeedbackOption<number>[];
}

export interface TextFollowupQuestion extends BaseFollowupQuestion {
    type: "text";
}

export type FollowupQuestion = ChoiceFollowupQuestion | TextFollowupQuestion | SliderFeedbackQuestion; */

interface BaseFeedbackAnswer {
    label: string;
    name: string;
    type: "radio" | "checkbox" | "text";
}

interface MultiFeedbackAnswer extends BaseFeedbackAnswer {
    type: "checkbox";
    value: string[];
}

interface SingleFeedbackAnswer extends BaseFeedbackAnswer {
    type: "radio" | "text";
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
    question: BaseQuestion;
    isLast: boolean;
};

export type FollowupState = {
    questions: BaseQuestion[];
    values: FeedbackAnswer[] | undefined;
    currentValue?: FeedbackOption | FeedbackOption[];
    step: FollowUpStep;
    submitted: boolean;
    handleNext: (question: BaseQuestion, value: string | string[]) => void;
    handleAbort: () => void;
    setCurrentValue: Dispatch<SetStateAction<FeedbackOption | FeedbackOption[] | undefined>>;
};

export interface QuestionProps {
    type?: QuestionType;
    label: string;
    name?: string;
    helpLabel?: string;
    options?: FeedbackOption[];
}
