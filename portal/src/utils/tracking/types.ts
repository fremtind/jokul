export const Events = {
    FEEDBACK: "Tilbakemelding",
    CLICK: "Klikk",
    SEARCH: "Søk",
} as const;

export type EventName = (typeof Events)[keyof typeof Events];

export type FeedbackEventProps = {
    question: string;
    sentiment: "positive" | "negative";
    score: number;
    comment: string;
};

export type ClickEventProps = {
    element: string;
    type:
        | "article link"
        | "header link"
        | "footer link"
        | "component link"
        | "button"
        | "copy button"
        | "q&a";
};

export type SearchEventProps = {
    query: string;
    results: string[];
};

export type EventProps = {
    [Events.FEEDBACK]: FeedbackEventProps;
    [Events.CLICK]: ClickEventProps;
    [Events.SEARCH]: SearchEventProps;
};
