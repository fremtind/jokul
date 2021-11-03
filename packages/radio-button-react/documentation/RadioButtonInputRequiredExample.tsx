import React, { VFC } from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { ExampleComponentProps } from "../../../doc-utils";
import { RadioButtonGroup, RadioButton } from "../src";

export const RadioButtonInputRequiredExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [selectedValue, setSelectedValue] = React.useState("");
    const variant = choiceValues && choiceValues["Variant"] ? (choiceValues["Variant"] as LabelVariant) : "medium";

    return (
        <RadioButtonGroup
            legend="Fikk du gjort det du skulle?"
            name="fant-du-fram"
            inline={boolValues && boolValues["Inline"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            labelProps={{ variant }}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        >
            <RadioButton label="Ja" value="y" />
            <RadioButton label="Nei" value="n" />
        </RadioButtonGroup>
    );
};

export const radioButtonInputRequiredExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<RadioButtonGroup
    legend="Fikk du gjort det du skulle?"
    name="fant-du-fram"
    inline={${!!boolValues?.["Inline"]}}
    forceCompact={${!!boolValues?.["Kompakt"]}}
    labelProps={{ variant: "${choiceValues?.["Variant"] || "medium"}" }}
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
>
    <RadioButton label="Ja" value="y" />
    <RadioButton label="Nei" value="n" />
</RadioButtonGroup>
`;
