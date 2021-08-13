import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";

import { Followup } from "../src";
import { FantDuPreset, FikkDuGjortPreset, HvorFornoydPreset, PresetProps, PRESETS } from "../src/presets";
import { ContactQuestion, MultipleChoiceQuestion, SingleChoiceQuestion, TextQuestion } from "../src/questions";
import { FeedbackQuestion } from "../src/types";

const PresetComponents: Record<keyof typeof PRESETS, React.ComponentType<PresetProps>> = {
    "Fant du": FantDuPreset,
    "Fikk du gjort": FikkDuGjortPreset,
    "Hvor fornøyd 5": HvorFornoydPreset,
};

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
    },
];

export const Example = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const followup = boolValues?.["Med oppfølgings-spørsmål"];
    const contact = boolValues?.["Med kontakt-spørsmål"];
    const ChosenPreset = choiceValues?.["Forhåndsvalg"]
        ? PresetComponents[choiceValues["Forhåndsvalg"] as keyof typeof PRESETS]
        : HvorFornoydPreset;

    return (
        <ChosenPreset onSubmit={console.info}>
            {followup && (
                <Followup onSubmit={console.info}>
                    <SingleChoiceQuestion {...followupQuestions[0]} />
                    <MultipleChoiceQuestion {...followupQuestions[1]} />
                    <TextQuestion {...followupQuestions[2]} />
                </Followup>
            )}
            {contact && (
                <ContactQuestion onSubmit={console.info}>
                    Vi gjennomfører jevnlig tester og intervjuer for å forbedre løsningene våre (ca. 30 minutter). Som
                    takk for hjelpen får du et gavekort. Legg igjen din e-postadresse hvis du er interessert.
                </ContactQuestion>
            )}
        </ChosenPreset>
    );
};

export default Example;
