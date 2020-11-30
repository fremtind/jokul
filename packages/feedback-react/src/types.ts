export type FeedbackValue = 1 | 2 | 3 | 4 | 5;
export type FeedbackPayload = {
    feedbackValue: FeedbackValue;
    message?: string;
};
