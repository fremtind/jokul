import { ComponentProps } from "react";
import { Feedback } from "./";

type FeedbackProps = ComponentProps<typeof Feedback>;
type PresetProperties = Pick<FeedbackProps, "label" | "type" | "options" | "addOnQuestion">;

const smileyQuestion: PresetProperties = {
    type: "smiley",
    label: "Hvor fornøyd er du med denne nettsiden?",
    options: [
        {
            label: "Veldig misfornøyd",
            value: 1,
            textAreaLabel: "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
        },
        {
            label: "Litt misfornøyd",
            value: 2,
            textAreaLabel: "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
        },
        {
            label: "Midt på treet",
            value: 3,
            textAreaLabel: "Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
        },
        {
            label: "Ganske fornøyd",
            value: 4,
            textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
        },
        {
            label: "Veldig fornøyd",
            value: 5,
            textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
        },
    ],
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
