import React from "react";
import { Feedback } from "./Feedback";
import { MainQuestion } from "./main-question/MainQuestion";
import { AddonQuestion, SingleChoiceQuestion, SliderQuestion } from "./questions";
import { FeedbackType } from "./types";

export const PRESETS = {
    "Fant du": {
        label: "Fant du det du lette etter?",
        feedbackOptions: [
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
        textAreaLabel: "Vil du legge til noe mer?",
    },
    "Fikk du gjort": {
        label: "Fikk du gjort det du skulle?",
        feedbackOptions: [
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
        textAreaLabel: "Vil du legge til noe mer?",
    },
    "Hvor fornøyd 5": {
        label: "Hvor fornøyd er du med løsningen?",
        feedbackOptions: [
            {
                label: "Kjempefornøyd!",
                value: 5,
                textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
            },
            {
                label: "Ganske fornøyd",
                value: 4,
                textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
            },
            {
                label: "Hverken eller",
                value: 3,
                textAreaLabel: "Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
            },
            {
                label: "Litt misfornøyd",
                value: 2,
                textAreaLabel: "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
            },
            {
                label: "Veldig misfornøyd!",
                value: 1,
                textAreaLabel: "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
            },
        ],
        textAreaLabel: "Vil du legge til noe mer?",
    },
};

export interface PresetProps {
    onSubmit: (value: FeedbackType) => void;
}

export const FantDuPreset: React.FC<PresetProps> = ({ children, onSubmit }) => (
    <Feedback>
        <MainQuestion onSubmit={onSubmit}>
            <SingleChoiceQuestion label={PRESETS["Fant du"].label} options={PRESETS["Fant du"].feedbackOptions} />
            <AddonQuestion label={PRESETS["Fant du"].textAreaLabel} />
        </MainQuestion>
        {children}
    </Feedback>
);

export const FikkDuGjortPreset: React.FC<PresetProps> = ({ children, onSubmit }) => (
    <Feedback>
        <MainQuestion onSubmit={onSubmit}>
            <SingleChoiceQuestion
                label={PRESETS["Fikk du gjort"].label}
                options={PRESETS["Fikk du gjort"].feedbackOptions}
            />
            <AddonQuestion label={PRESETS["Fikk du gjort"].textAreaLabel} />
        </MainQuestion>
        {children}
    </Feedback>
);

interface FornoydPresetProps extends PresetProps {
    hva?: string;
}

export const HvorFornoydPreset: React.FC<FornoydPresetProps> = ({ hva = "løsningen", children, onSubmit }) => (
    <Feedback>
        <MainQuestion onSubmit={onSubmit}>
            <SliderQuestion
                label={`På en skala fra 1 til 5, hvor fornøyd er du med ${hva}?`}
                options={PRESETS["Hvor fornøyd 5"].feedbackOptions}
            />
            <AddonQuestion label={PRESETS["Hvor fornøyd 5"].textAreaLabel} />
        </MainQuestion>
        {children}
    </Feedback>
);
