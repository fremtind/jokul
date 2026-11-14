export const ERROR_STATUS_CODES = [404, 500] as const;

export type ErrorStatusCode = (typeof ERROR_STATUS_CODES)[number];

export type ErrorAction = "home" | "back" | "retry" | "login";

export type ErrorTone = "info" | "warning" | "error";

export interface ErrorPageContent {
    /** Kort oppsummering av feilen, brukt som overskrift og sidetittel. */
    title: string;
    description: string;
    /** Punktliste som utfyller `description`, for eksempel mulige årsaker. */
    details?: readonly string[];
    tone: ErrorTone;
    /** Første handling vises som hovedhandling. */
    actions: readonly ErrorAction[];
}

export const ERROR_PAGE_CONTENT: Record<ErrorStatusCode, ErrorPageContent> = {
    404: {
        title: "Denne siden finnes ikke",
        description:
            "Siden du prøver å vise er ikke lenger tilgjengelig. Det kan være flere grunner til at du havnet her:",
        details: [
            "Siden har blitt fjernet og andre sider lenker fortsatt til den",
            "Serveren vår kan ha tekniske problemer",
            "Skrivefeil i url-en",
        ],
        tone: "info",
        actions: ["home", "back"],
    },
    500: {
        title: "Denne siden fungerer ikke for øyeblikket",
        description:
            "På grunn av tekniske problemer klarer vi ikke å vise innholdet på denne siden akkurat nå.",
        tone: "error",
        actions: ["retry", "home"],
    },
};

export const isErrorStatusCode = (value: unknown): value is ErrorStatusCode =>
    ERROR_STATUS_CODES.includes(value as ErrorStatusCode);
