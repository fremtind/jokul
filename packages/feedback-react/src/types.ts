export type FeedbackOptions = 1 | 2 | 3 | 4 | 5;

export type FeedbackType = {
    feedbackValue: FeedbackOptions;
    message?: string;
};
