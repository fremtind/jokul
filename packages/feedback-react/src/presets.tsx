import { ComponentProps } from "react";
import { defaultOptions as smileyOptions } from "./questions/smileyUtils";
import { Feedback } from "./";

type FeedbackProps = ComponentProps<typeof Feedback>;
type PresetProperties = Pick<FeedbackProps, "label" | "type" | "options" | "addOnQuestion">;

const smileyQuestion: PresetProperties = {
    type: "smiley",
    label: "Hvor fornøyd er du med denne nettsiden?",
    options: smileyOptions,
    addOnQuestion: { label: "Vil du legge til noe mer?" },
};

export const PRESETS: Record<string, PresetProperties> = {
    "Fant du": {
        type: "radio",
        label: "Fant du det du lette etter?",
        options: [
            {
                label: "Ja",
                value: "ja",
                textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
            },
            {
                label: "Nei",
                value: "nei",
                textAreaLabel: "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
            },
        ],
        addOnQuestion: { label: "Vil du legge til noe mer?" },
    },
    "Fikk du gjort": {
        type: "radio",
        label: "Fikk du gjort det du skulle?",
        options: [
            {
                label: "Ja",
                value: "ja",
                textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
            },
            {
                label: "Nei",
                value: "nei",
                textAreaLabel: "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
            },
        ],
        addOnQuestion: { label: "Vil du legge til noe mer?" },
    },
    "Hvor fornøyd 5": smileyQuestion,
    Smileys: smileyQuestion,
};
