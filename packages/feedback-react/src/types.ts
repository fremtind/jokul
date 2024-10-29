import { Dispatch, FormEvent, FormEventHandler, SetStateAction } from "react";

export type FeedbackOption<T = string | number> = {
    /** Teksten som vises ved alternativet */
    label: string;
    value: T;
    /** Her kan du spesifisere en egen tekst til oppfølgingsspørsmålet dersom dette alternativet er valgt (gjelder kun alternativene til hovedspørsmålet i Feedback, ignoreres ellers) */
    textAreaLabel?: string;
};

export type QuestionType = "radio" | "checkbox" | "text" | "smiley";

interface BaseQuestion {
    type: QuestionType;
    label: string;
    helpLabel?: string;
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

interface SmileyQuestion extends BaseQuestion {
    type: "smiley";
    options: FeedbackOption<number>[];
}

interface TextQuestion extends BaseQuestion {
    type: "text";
}

export type MainQuestion = RadioQuestion | SmileyQuestion;
export type FollowupQuestion = MainQuestion | TextQuestion | CheckboxQuestion;

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
    /** Feedbackverdien, format avhenger av typen spørsmål */
    feedbackValue: number | string | Array<string | number>;
    /** Angir hvorvidt brukeren aktivt sendte inn tilbakemeldingen. Dersom `false` ble skjemaet sendt inn da brukeren forlot siden */
    intentionalSubmit: boolean;
    /** Eventuell utfyllende melding fra brukeren. Blir bare sendt inn dersom brukeren aktivt sender inn tilbakemelding */
    message?: string;
};

export type FeedbackState = {
    currentValue?: FeedbackOption | FeedbackOption[];
    setCurrentValue: Dispatch<
        SetStateAction<FeedbackOption | FeedbackOption[] | undefined>
    >;
    message?: string;
    setMessage: Dispatch<SetStateAction<string | undefined>>;
    submitted: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement>;
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
    handleNext: (e?: FormEvent<HTMLFormElement>) => void;
    handleAbort: () => void;
    setCurrentValue: Dispatch<
        SetStateAction<FeedbackOption | FeedbackOption[] | undefined>
    >;
};

export interface QuestionProps {
    type?: QuestionType;
    label: string;
    name?: string;
    helpLabel?: string;
    options?: FeedbackOption[];
    autoFocus?: boolean;
}
