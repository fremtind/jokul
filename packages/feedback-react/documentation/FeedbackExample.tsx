import React, { FC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Feedback, PRESETS } from "../src";
import { FollowupQuestion } from "../src/types";

const followupQuestions: FollowupQuestion[] = [
    {
        type: "radio",
        label: "Hvordan opplevde du å bestille forsikring på nett?",
        name: "opplevelse",
        options: [
            { label: "Enkelt og greit", value: "enkelt" },
            { label: "Midt på treet", value: "ok" },
            { label: "Tungvindt", value: "tungvindt" },
        ],
    },
    {
        type: "checkbox",
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

const contactQuestion = {
    withPhone: true,
    label: "Vil du være med å teste sidene våre?",
    children:
        "Vi gjennomfører jevnlig tester og intervjuer for å forbedre løsningene våre (ca. 30 minutter). Som takk for hjelpen får du et gavekort. Legg igjen din e-postadresse hvis du er interessert.",
    sendButtonLabel: "Skriv meg opp!",
    onSubmit: console.info,
};

export const FeedbackExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const followup = boolValues?.["Med oppfølgings-spørsmål"]
        ? {
              onSubmit: console.log,
              questions: followupQuestions,
          }
        : undefined;
    const contact = boolValues?.["Med kontakt-spørsmål"] ? contactQuestion : undefined;
    const preset = choiceValues?.["Forhåndsvalg"]
        ? PRESETS[choiceValues["Forhåndsvalg"] as keyof typeof PRESETS]
        : PRESETS["Smileys"];

    return (
        <Feedback
            type={preset.type}
            options={preset.options}
            label={preset.label}
            addOnQuestion={preset.addOnQuestion}
            onSubmit={console.log}
            followup={followup}
            contactQuestion={contact}
            maxLength={250}
        />
    );
};

export const feedbackCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
import { Feedback, PRESETS } from "@fremtind/jkl-feedback-react";

<Feedback
    {...PRESETS["${choiceValues?.["Forhåndsvalg"]}"]}
    onSubmit={console.log}
    followup={${
        !!boolValues?.["Med oppfølgings-spørsmål"]
            ? `[
        {
            type: "radio",
            label: "Hvordan opplevde du å bestille forsikring på nett?",
            name: "opplevelse",
            options: [
                { label: "Enkelt og greit", value: "enkelt" },
                { label: "Midt på treet", value: "ok" },
                { label: "Tungvindt", value: "tungvindt" },
            ],
        },
        {
            type: "checkbox",
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
    ]`
            : undefined
    }}
    contactQuestion={${
        !!boolValues?.["Med kontakt-spørsmål"]
            ? `{
        withPhone: true,
        label: "Vil du være med å teste sidene våre?",
        children:
            "Vi gjennomfører jevnlig tester og intervjuer for å forbedre løsningene våre (ca. 30 minutter). Som takk for hjelpen får du et gavekort. Legg igjen din e-postadresse hvis du er interessert.",
        sendButtonLabel: "Skriv meg opp!",
        onSubmit: console.info,
    }`
            : undefined
    }}
    maxLength={250}
/>
`;
