import React, { ChangeEventHandler, useEffect, useState } from "react";

import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { TextArea } from "@fremtind/jkl-text-input-react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { SuccessMessage } from "@fremtind/jkl-message-box-react";

import { FeedbackAnswer, FeedbackQuestion } from "./types";
import { useFollowup } from "./useFollowup";
import { FollowUpProvider, useFollowUpContext } from "./followupContext";

interface Props {
    onSubmit: (values: FeedbackAnswer[]) => void;
    questions: FeedbackQuestion[];
}

interface QuestionProps {
    q: FeedbackQuestion;
    updateValue: (v: string | string[]) => void;
    className?: string;
}

const SingleChoiceQuestion = ({ q, updateValue, className }: QuestionProps) => {
    const [value, setValue] = useState<string>();

    useEffect(() => updateValue(value || ""), [value, updateValue]);

    return (
        <RadioButtons
            className={className}
            variant="large"
            legend={q.label}
            name={q.name || q.label}
            choices={q.options.map(({ label, value }) => ({ label, value: value.toString() }))}
            selectedValue={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

const MultipleChoiceQuestion = ({ q, updateValue, className }: QuestionProps) => {
    const [values, setValues] = useState<string[]>([]);
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target;
        const found = values.indexOf(value) !== -1;
        setValues((oldValues) => (found ? oldValues.filter((v) => v !== value) : [...oldValues, value]));
    };

    useEffect(() => updateValue(values), [values, updateValue]);

    return (
        <FieldGroup className={className} variant="large" legend={q.label}>
            {q.options.map((o) => (
                <Checkbox
                    key={`${q.label}-${o.value}`}
                    name={q.name || q.label}
                    value={o.value.toString()}
                    onChange={handleChange}
                >
                    {o.label}
                </Checkbox>
            ))}
        </FieldGroup>
    );
};

const TextQuestion = ({ q, updateValue, className }: QuestionProps) => {
    const [value, setValue] = useState("");

    useEffect(() => updateValue(value), [value, updateValue]);

    return (
        <TextArea
            className={className}
            variant="large"
            label={q.label}
            name={q.name || q.label}
            startOpen
            rows={5}
            helpLabel="Ikke skriv personlige opplysninger. Tilbakemeldinger som kommer inn her blir ikke besvart, men brukt i videre arbeid med å forbedre tjenestene våre."
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

const getQuestionComponent = (q: FeedbackQuestion) => {
    switch (q.type) {
        case "single":
            return SingleChoiceQuestion;
        case "multiple":
            return MultipleChoiceQuestion;
        case "text":
            return TextQuestion;
    }
};

const FollowUpStep = () => {
    const { step, handleNext, handleAbort } = useFollowUpContext();
    const QuestionComponent = getQuestionComponent(step.question);
    const Button = step.isLast ? PrimaryButton : SecondaryButton;
    const [currentStepValue, setCurrentStepValue] = useState<string | string[]>("");

    return (
        <div className="jkl-feedback__fade-in" key={step.number}>
            <QuestionComponent
                q={step.question}
                updateValue={setCurrentStepValue}
                className="jkl-layout-spacing--medium-bottom"
            />
            <Button onClick={() => handleNext(step.question, currentStepValue)}>
                {step.isLast ? "Send inn" : "Neste"}
            </Button>
            <TertiaryButton onClick={handleAbort} className="jkl-layout-spacing--medium-left">
                Avbryt
            </TertiaryButton>
        </div>
    );
};

export const FollowupWizard = ({ questions, onSubmit }: Props) => {
    const followUpState = useFollowup(questions, onSubmit);

    return (
        <FollowUpProvider state={followUpState}>
            {!followUpState.submitted && (
                <>
                    <p className="jkl-feedback__step-counter">
                        Steg {followUpState.step.number + 1} av {questions.length}
                    </p>
                    <FollowUpStep />
                </>
            )}
            {followUpState.submitted && (
                <div data-testid="jkl-feedback__follow-up-success" className="jkl-feedback__fade-in">
                    <SuccessMessage className="jkl-feedback__success" title="Takk, igjen!">
                        Vi setter pris på at du tok deg tid til å svare på flere spørsmål. Den hjelper oss med å gjøre
                        nettsidene bedre for deg og alle andre som bruker den.
                    </SuccessMessage>
                </div>
            )}
        </FollowUpProvider>
    );
};
