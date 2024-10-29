type Level = "A" | "AA" | "AAA";

type PrincipleIndex = "1" | "2" | "3" | "4";

type Perceivable = "1.1" | "1.2" | "1.3" | "1.4";
type Operable = "2.1" | "2.2" | "2.3" | "2.4";
type Understandable = "3.1" | "3.2" | "3.3";
type Robust = "4.1";

type GuidelineIndex = Perceivable | Operable | Understandable | Robust;

// criteria
// TODO Add AAA criteria
type TextAlternatives = "1.1.1";
type TimeBasedMedia = "1.2.1" | "1.2.2";
type Adaptable = "1.3.1" | "1.3.2" | "1.3.3";
type Distinguishable =
    | "1.4.1"
    | "1.4.2"
    | "1.4.3"
    | "1.4.4"
    | "1.4.5"
    | "1.4.8"
    | "1.4.12";
type Keyboard = "2.1.1" | "2.1.2";
type EnoughTime = "2.2.1" | "2.2.2";
type Seizures = "2.3.1" | "2.3.2";
type Navigable =
    | "2.4.1"
    | "2.4.2"
    | "2.4.3"
    | "2.4.4"
    | "2.4.5"
    | "2.4.6"
    | "2.4.7";
type Readable = "3.1.1" | "3.1.2";
type Predictable = "3.2.1" | "3.2.2" | "3.2.3" | "3.2.4";
type InputAssistance = "3.3.1" | "3.3.2" | "3.3.3" | "3.3.4";
type Compatible = "4.1.1" | "4.1.2";

type CriteriaIndex =
    | TextAlternatives
    | TimeBasedMedia
    | Adaptable
    | Distinguishable
    | Keyboard
    | EnoughTime
    | Seizures
    | Navigable
    | Readable
    | Predictable
    | InputAssistance
    | Compatible;

type PartialRecord<K extends string, T> = {
    [P in K]?: T;
};

interface Criteria {
    title: string;
    exception?: boolean;
    level: Level;
    w3OrgId: string;
}

interface Guideline<T extends CriteriaIndex> {
    title: string;
    criteria: PartialRecord<T, Criteria>;
}

interface Principle<T extends GuidelineIndex> {
    title: string;
    guidelines: PartialRecord<T, Guideline<CriteriaIndex>>;
}

const textAlternatives: Guideline<TextAlternatives> = {
    title: "Tekstalternativer",
    criteria: {
        "1.1.1": {
            level: "A",
            title: "Ikke-tekstlig innhold",
            w3OrgId: "non-text-content",
        },
    },
};
const timeBasedMedia: Guideline<TimeBasedMedia> = {
    title: "Alternativer for tidsbaserte medier",
    criteria: {
        "1.2.1": {
            level: "A",
            title: "Bare lyd og bare video (forhåndsinnspilt)",
            exception: true,
            w3OrgId: "audio-only-and-video-only-prerecorded",
        },
        "1.2.2": {
            level: "A",
            title: "Teksting (forhåndsinnspilt)",
            exception: true,
            w3OrgId: "captions-prerecorded",
        },
    },
};
const adaptable: Guideline<Adaptable> = {
    title: "Innhold kan tilpasses",
    criteria: {
        "1.3.1": {
            level: "A",
            title: "Informasjon og relasjoner",
            w3OrgId: "info-and-relationships",
        },
        "1.3.2": {
            level: "A",
            title: "Meningsfylt rekkefølge",
            w3OrgId: "meaningful-sequence",
        },
        "1.3.3": {
            level: "A",
            title: "Sensoriske egenskaper",
            w3OrgId: "sensory-characteristics",
        },
    },
};
const distinguishable: Guideline<Distinguishable> = {
    title: "Innhold er identifiserbar",
    criteria: {
        "1.4.1": {
            level: "A",
            title: "Bruk av farge",
            w3OrgId: "use-of-color",
        },
        "1.4.2": {
            level: "A",
            title: "Styring av lyd",
            w3OrgId: "audio-control",
        },
        "1.4.3": {
            level: "AA",
            title: "Kontrast (minimum)",
            w3OrgId: "contrast-minimum",
        },
        "1.4.4": {
            level: "AA",
            title: "Endring av tekststørrelse",
            w3OrgId: "resize-text",
        },
        "1.4.5": {
            level: "AA",
            title: "Bilder av tekst",
            w3OrgId: "images-of-text",
        },
        "1.4.8": {
            level: "AAA",
            title: "Visuell presentasjon",
            w3OrgId: "visual-presentation",
        },
        "1.4.12": {
            level: "AA",
            title: "Mellomrom på tekst",
            w3OrgId: "text-spacing",
        },
    },
};
const keyboard: Guideline<Keyboard> = {
    title: "Tastaturnavigering",
    criteria: {
        "2.1.1": {
            level: "A",
            title: "Tastatur",
            w3OrgId: "keyboard",
        },
        "2.1.2": {
            level: "A",
            title: "Ingen tastaturfelle",
            w3OrgId: "no-keyboard-trap",
        },
    },
};
const enoughTime: Guideline<EnoughTime> = {
    title: "Nok tid",
    criteria: {
        "2.2.1": {
            level: "A",
            title: "Justerbar hastighet",
            w3OrgId: "timing-adjustable",
        },
        "2.2.2": {
            level: "A",
            title: "Pause, stopp, skjul",
            w3OrgId: "pause-stop-hide",
        },
    },
};
const seizures: Guideline<Seizures> = {
    title: "Unngå anfall",
    criteria: {
        "2.3.1": {
            level: "A",
            title: "Justerbar hastighet",
            w3OrgId: "three-flashes-or-below-threshold",
        },
        "2.3.2": {
            level: "AAA",
            title: "Tre glimt",
            w3OrgId: "three-flashes",
        },
    },
};
const navigable: Guideline<Navigable> = {
    title: "Navigerbar",
    criteria: {
        "2.4.1": {
            level: "A",
            title: "Hoppe over blokker",
            w3OrgId: "bypass-blocks",
        },
        "2.4.2": {
            level: "A",
            title: "Sidetitler",
            w3OrgId: "page-titled",
        },
        "2.4.3": {
            level: "A",
            title: "Fokusrekkefølge",
            w3OrgId: "focus-order",
        },
        "2.4.4": {
            level: "A",
            title: "Formål med lenke (i kontekst)",
            w3OrgId: "link-purpose-in-context",
        },
        "2.4.5": {
            level: "AA",
            title: "Flere måter",
            w3OrgId: "multiple-ways",
        },
        "2.4.6": {
            level: "AA",
            title: "Overskrifter og ledetekster",
            w3OrgId: "headings-and-labels",
        },
        "2.4.7": {
            level: "AA",
            title: "Synlig fokus",
            w3OrgId: "focus-visible",
        },
    },
};
const readable: Guideline<Readable> = {
    title: "Leselig og forståelig",
    criteria: {
        "3.1.1": {
            level: "A",
            title: "Språk på siden",
            w3OrgId: "language-of-page",
        },
        "3.1.2": {
            level: "A",
            title: "Språk på deler av innhold",
            w3OrgId: "language-of-parts",
        },
    },
};
const predictable: Guideline<Predictable> = {
    title: "Forutsigbar",
    criteria: {
        "3.2.1": {
            level: "A",
            title: "Fokus",
            w3OrgId: "on-focus",
        },
        "3.2.2": {
            level: "A",
            title: "Inndata",
            w3OrgId: "on-input",
        },
        "3.2.3": {
            level: "AA",
            title: "Konsekvent navigering",
            w3OrgId: "consistent-navigation",
        },
        "3.2.4": {
            level: "AA",
            title: "Konsekvent identifikasjon",
            w3OrgId: "consistent-identification",
        },
    },
};
const inputAssistance: Guideline<InputAssistance> = {
    title: "Unngå og rette opp feil",
    criteria: {
        "3.3.1": {
            level: "A",
            title: "Identifikasjon av feil",
            w3OrgId: "error-identification",
        },
        "3.3.2": {
            level: "A",
            title: "Ledetekster eller instruksjoner",
            w3OrgId: "labels-or-instructions",
        },
        "3.3.3": {
            level: "AA",
            title: "Forslag ved feil",
            w3OrgId: "error-suggestion",
        },
        "3.3.4": {
            level: "AA",
            title: "Forhindring av feil (juridiske feil, økonomiske feil)",
            w3OrgId: "error-prevention-legal-financial-data",
        },
    },
};
const compatible: Guideline<Compatible> = {
    title: "Kompitabilitet",
    criteria: {
        "4.1.1": {
            level: "A",
            title: "Parsing (oppdeling)",
            w3OrgId: "parsing",
        },
        "4.1.2": {
            level: "A",
            title: "Navn, rolle, verdi",
            w3OrgId: "name-role-value",
        },
    },
};

const perceivable: Principle<Perceivable> = {
    title: "Mulig å oppfatte",
    guidelines: {
        "1.1": textAlternatives,
        "1.2": timeBasedMedia,
        "1.3": adaptable,
        "1.4": distinguishable,
    },
};

const operable: Principle<Operable> = {
    title: "Mulig å betjene",
    guidelines: {
        "2.1": keyboard,
        "2.2": enoughTime,
        "2.3": seizures,
        "2.4": navigable,
    },
};
const understandable: Principle<Understandable> = {
    title: "Forståelig",
    guidelines: {
        "3.1": readable,
        "3.2": predictable,
        "3.3": inputAssistance,
    },
};
const robust: Principle<Robust> = {
    title: "Robust",
    guidelines: {
        "4.1": compatible,
    },
};

export const wcag: {
    [key in PrincipleIndex]: Principle<GuidelineIndex>;
} = {
    "1": perceivable,
    "2": operable,
    "3": understandable,
    "4": robust,
};

export const getCriteriaById = (id: string): Criteria => {
    const ids = id.split(".");

    const principle = wcag[ids[0] as PrincipleIndex];
    const guideline =
        principle.guidelines[[ids[0], ids[1]].join(".") as GuidelineIndex];

    const criteria = guideline?.criteria[id as CriteriaIndex];

    if (!criteria) {
        throw "Missing criteria: " + id;
    }
    return criteria;
};
