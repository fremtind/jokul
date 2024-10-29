import { FeedbackOption } from "./types.js";

export const VERY_UNHAPPY: FeedbackOption = {
    label: "Ikke fornøyd i det hele tatt",
    value: 1,
};
export const UNHAPPY: FeedbackOption = { label: "Ikke fornøyd", value: 2 };
export const NEUTRAL: FeedbackOption = {
    label: "Verken fornøyd eller misfornøyd",
    value: 3,
};
export const HAPPY: FeedbackOption = { label: "Fornøyd", value: 4 };
export const VERY_HAPPY: FeedbackOption = { label: "Veldig fornøyd", value: 5 };
