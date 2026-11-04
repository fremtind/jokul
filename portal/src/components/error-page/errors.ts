export const ERROR_STATUS_CODES = [
    400, 403, 404, 408, 429, 500, 502, 503, 504,
] as const;

export type ErrorStatusCode = (typeof ERROR_STATUS_CODES)[number];

export type ErrorAction = "home" | "back" | "retry" | "login";

export type ErrorTone = "info" | "warning" | "error";

export interface ErrorPageContent {
    /** Kort oppsummering av feilen, brukt som overskrift og sidetittel. */
    title: string;
    description: string;
    tone: ErrorTone;
    /** Første handling vises som hovedhandling. */
    actions: readonly ErrorAction[];
}

export const ERROR_PAGE_CONTENT: Record<ErrorStatusCode, ErrorPageContent> = {
    400: {
        title: "Den der skjønte vi ikke helt.",
        description:
            "Noe i forespørselen din fikk systemet til å klø seg i hodet. Prøv igjen, så later vi som ingenting.",
        tone: "warning",
        actions: ["back", "home"],
    },
    403: {
        title: "Her stopper festen.",
        description:
            "Du har dessverre ikke tilgang til denne delen av portalen. Dørvakta er ganske streng.",
        tone: "error",
        actions: ["home", "back"],
    },
    404: {
        title: "Denne siden tok visst ferie.",
        description:
            "Vi har lett høyt og lavt, men siden er sporløst forsvunnet. Kanskje den trenger litt egentid?",
        tone: "info",
        actions: ["home", "back"],
    },
    408: {
        title: "Tiden flyr. Litt for fort.",
        description:
            "Vi ventet på svar, men det kom aldri. Prøv igjen, kanskje vi er litt raskere denne gangen.",
        tone: "warning",
        actions: ["retry", "home"],
    },
    429: {
        title: "Oi, vi var visst litt ivrige!",
        description:
            "Det ble litt mange forespørsler på én gang. Gi oss et lite øyeblikk til å hente pusten.",
        tone: "warning",
        actions: ["retry", "home"],
    },
    500: {
        title: "Houston, vi har et problem.",
        description:
            "Noe gikk galt bak kulissene. Vi skylder på teknologien denne gangen.",
        tone: "error",
        actions: ["retry", "home"],
    },
    502: {
        title: "Serverne snakker visst ikke sammen.",
        description:
            "Det har oppstått en liten kommunikasjonskrise bak kulissene. Vi håper de blir venner igjen snart.",
        tone: "error",
        actions: ["retry", "home"],
    },
    503: {
        title: "Vi skrur på noe. Forhåpentligvis riktig skrue.",
        description:
            "Portalen er midlertidig utilgjengelig. Prøv igjen om litt, så satser vi på at alt sitter som det skal.",
        tone: "warning",
        actions: ["retry", "home"],
    },
    504: {
        title: "Hallo? Er det noen der?",
        description: "Vi ventet for lenge på svar. Prøv igjen om litt.",
        tone: "warning",
        actions: ["retry", "home"],
    },
};

export const isErrorStatusCode = (value: unknown): value is ErrorStatusCode =>
    ERROR_STATUS_CODES.includes(value as ErrorStatusCode);
