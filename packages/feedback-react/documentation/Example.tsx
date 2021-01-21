import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Feedback, SimplifiedFeedback } from "../src";

export const Example = ({ boolValues }: ExampleComponentProps) => {
    const Component = boolValues?.["Uten smilefjes"] ? SimplifiedFeedback : Feedback;

    return (
        <>
            <Component
                label="Gi oss tilbakemelding!"
                description="Hvor fornøyd er du med denne siden for å følge saken?"
                onSubmit={console.info}
                showTextArea={!boolValues?.["Uten tekst"]}
            />

            <Component
                label="Bare to valg"
                description="Hvor fornøyd er du med denne siden for å følge saken?"
                onSubmit={console.info}
                showTextArea={!boolValues?.["Uten tekst"]}
                feedbackOptions={[1, 5]}
                className="jkl-layout-spacing--large-top"
            />
        </>
    );
};

export default Example;
