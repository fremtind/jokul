import React, { ChangeEvent, useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Feedback } from "../src";

export const Example = ({ boolValues }: ExampleComponentProps) => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const submit = () => {
        setFeedbackSubmitted(true);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <Feedback
            label="Gi oss tilbakemelding!"
            description="Hvor fornøyd er du med denne siden for å følge saken?"
            onClick={submit}
            feedbackSubmitted={feedbackSubmitted}
            successData={{
                title: "Takk for tilbakemeldingen!",
                message: "Det hjelper oss i arbeidet med å forbedre våre skjemaer.",
            }}
            textAreaData={{
                label: "Tips oss gjerne om hva vi kan forbedre",
                onChange: (e) => onChange(e),
                value: value,
            }}
            simplified={boolValues && boolValues["Uten smilefjes"]}
            entries={6}
        />
    );
};

export default Example;
