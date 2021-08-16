import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Feedback, PRESETS } from "../src";
import { FeedbackQuestion } from "../src/types";

const followupQuestions: FeedbackQuestion[] = [
    {
        type: "single",
        label: "Hvordan opplevde du å bestille forsikring på nett?",
        name: "opplevelse",
        options: [
            { label: "Enkelt og greit", value: "enkelt" },
            { label: "Midt på treet", value: "ok" },
            { label: "Tungvindt", value: "tungvindt" },
        ],
    },
    {
        type: "multiple",
        label: "Hva er viktig for deg?",
        name: "viktig",
        options: [
            { label: "At det går raskt å bestille", value: "hurtighet" },
            { label: "God informasjon", value: "info" },
            { label: "At det ser fint ut", value: "utseende" },
            { label: "At forsikringen er billig", value: "pris" },
        ],
    },
    {
        type: "text",
        label: "Er det noe mer du vil legge til?",
        name: "annet",
        options: [],
    },
];

export const Example = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const followup = boolValues?.["Med oppfølgings-spørsmål"]
        ? {
              questions: followupQuestions,
              onSubmit: console.info,
          }
        : undefined;
    const preset = (choiceValues?.["Forhåndsvalg"] as keyof typeof PRESETS) || "Fant du";

    return <Feedback {...PRESETS[preset]} onSubmit={console.info} followUp={followup} />;
};

export default Example;
