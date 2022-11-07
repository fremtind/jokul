import { LabelVariant } from "@fremtind/jkl-core";
import { ExampleComponentProps } from "@fremtind/jkl-internal-doc-utils";
import React, { FC } from "react";
import { RadioButtonGroup, RadioButton } from "../src";

export const RadioButtonInputRequiredExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [selectedValue, setSelectedValue] = React.useState("");
    const variant = choiceValues && choiceValues["Variant"] ? (choiceValues["Variant"] as LabelVariant) : "medium";

    return (
        <RadioButtonGroup
            legend="Fikk du gjort det du skulle?"
            name="fant-du-fram"
            inline={boolValues && boolValues["Inline"]}
            labelProps={{ variant }}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        >
            <RadioButton value="y">Ja</RadioButton>
            <RadioButton value="n">Nei</RadioButton>
        </RadioButtonGroup>
    );
};

export const radioButtonInputRequiredExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<RadioButtonGroup
    legend="Fikk du gjort det du skulle?"
    name="fant-du-fram"
    inline={${!!boolValues?.["Inline"]}}
    labelProps={{ variant: "${choiceValues?.["Variant"] || "medium"}" }}
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
>
    <RadioButton value="y">Ja</RadioButton>
    <RadioButton value="n">Nei</RadioButton>
</RadioButtonGroup>
`;
