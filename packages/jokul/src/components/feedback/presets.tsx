import { FeedbackProps } from "./Feedback.js";
import { defaultOptions as smileyOptions } from "./questions/smileyUtils.js";

export type PresetProperties = Pick<
    FeedbackProps,
    "label" | "type" | "options" | "addOnQuestion"
>;

const smileyQuestion: PresetProperties = {
    type: "smiley",
    label: "Hvor fornøyd er du med denne nettsiden?",
    options: smileyOptions,
    addOnQuestion: true,
};

export const PRESETS: Record<string, PresetProperties> = {
    "Fant du": {
        type: "radio",
        label: "Fant du det du lette etter?",
        options: [
            {
                label: "Ja",
                value: "ja",
                textAreaLabel:
                    "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
            },
            {
                label: "Nei",
                value: "nei",
                textAreaLabel:
                    "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
            },
        ],
        addOnQuestion: true,
    },
    "Fikk du gjort": {
        type: "radio",
        label: "Fikk du gjort det du skulle?",
        options: [
            {
                label: "Ja",
                value: "ja",
                textAreaLabel:
                    "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
            },
            {
                label: "Nei",
                value: "nei",
                textAreaLabel:
                    "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
            },
        ],
        addOnQuestion: true,
    },
    "Hvor fornøyd 5": smileyQuestion,
    Smileys: smileyQuestion,
};
