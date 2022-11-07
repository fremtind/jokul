import { LabelVariant } from "@fremtind/jkl-core";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { RadioButtonGroup, RadioButton } from "../src";

export const radioButtonExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med feil"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 1,
        },
    ],
};

export const RadioButtonExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const choices = ["Send en e-post", "Ring meg", "Send et brev til folkeregistrert adresse"];
    const [selectedValue, setSelectedValue] = React.useState("Yes");
    const errorLabel =
        boolValues && boolValues["Med feil"]
            ? "Du må velge hvordan du vil bli kontaktet. Ved å velge e-post får du beskjed raskest mulig."
            : undefined;
    const variant = choiceValues && choiceValues["Variant"] ? (choiceValues["Variant"] as LabelVariant) : "medium";

    return (
        <RadioButtonGroup
            legend="Hvordan vil du bli kontaktet?"
            name="kontaktmetode"
            labelProps={{ variant }}
            helpLabel="Ved å velge e-post får du beskjed raskest mulig"
            errorLabel={errorLabel}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        >
            {choices.map((value) => (
                <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>
            ))}
        </RadioButtonGroup>
    );
};

export const radioButtonExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<RadioButtonGroup
    legend="Hvordan vil du bli kontaktet?"
    name="kontaktmetode"
    labelProps={{ variant: "${choiceValues?.["Variant"] || "medium"}" }}
    helpLabel="Hjelpetekst"${
        boolValues?.["Med feil"]
            ? `
    errorLabel="Her er det noe feil"`
            : ""
    }
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
>
    {choices.map((value) => (
        <RadioButton key={value} value={value}>
            {value}
        </RadioButton>
    ))}
</RadioButtonGroup>
`;
