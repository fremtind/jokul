import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { SuccessMessage } from "@fremtind/jkl-message-box-react";
import { Feedback, HAPPY, NEUTRAL, SimplifiedFeedback, UNHAPPY, VERY_HAPPY, VERY_UNHAPPY } from "../src";

export const Example = ({ boolValues }: ExampleComponentProps) => {
    const Component = boolValues?.["Uten smilefjes"] ? SimplifiedFeedback : Feedback;

    return (
        <>
            <Component
                label="Gi oss tilbakemelding!"
                description="Hvor fornøyd er du med denne siden for å følge saken?"
                onSubmit={console.info}
                showTextArea={!boolValues?.["Uten tekst"]}
                renderCustomSuccess={(props) => (
                    <div>
                        <SuccessMessage title="Tilbakemelding sendt!">
                            {props.value === VERY_UNHAPPY.value && <>Det var trist!</>}
                            {props.value === UNHAPPY.value && (
                                <>Vi ser på alle tilbakemeldinger, håper vi kan gjøre deg mer fornøyd en annen gang!</>
                            )}
                            {props.value === NEUTRAL.value && (
                                <>Vi vil gjerne ha fornøyde kunder, så vi skal se på tilbakemeldingen din!</>
                            )}
                            {props.value === HAPPY.value && <>Takk skal du ha!</>}
                            {props.value === VERY_HAPPY.value && (
                                <>
                                    Det var stas du var fornøyd, vi prøver hele tiden å bli bedre! Takk for
                                    tilbakemeldingen!
                                </>
                            )}
                        </SuccessMessage>
                        {props.message && (
                            <div className="jkl-layout-spacing--small-top">
                                <span>Kopi av din melding</span>
                                <pre>{props.message}</pre>
                            </div>
                        )}
                    </div>
                )}
            />

            <Component
                label="Bare to valg"
                description="Hvor fornøyd er du med denne siden for å følge saken?"
                onSubmit={console.info}
                showTextArea={!boolValues?.["Uten tekst"]}
                feedbackOptions={[UNHAPPY, HAPPY]}
                className="jkl-layout-spacing--large-top"
            />
        </>
    );
};

export default Example;
