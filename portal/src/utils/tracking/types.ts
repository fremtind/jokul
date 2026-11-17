export const Events = {
    FEEDBACK: "Tilbakemelding",
    SEARCH: "Søk",
} as const;

export type EventName = (typeof Events)[keyof typeof Events];

export type FeedbackEventProps = {
    question: string;
    sentiment: "positive" | "negative";
    score: number;
    comment: string;
};

export type SearchEventProps = {
    query: string;
    results: string[];
};

export type EventProps = {
    [Events.FEEDBACK]: FeedbackEventProps;
    [Events.SEARCH]: SearchEventProps;
};
