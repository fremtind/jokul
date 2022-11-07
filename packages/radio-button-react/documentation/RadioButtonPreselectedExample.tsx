import { ExampleComponentProps } from "@fremtind/jkl-internal-doc-utils";
import React, { FC } from "react";
import { RadioButtonGroup, RadioButton } from "../src";

export const RadioButtonPreselectedExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const choices = ["Månedspris", "Årspris"];
    const [selectedValue, setSelectedValue] = React.useState("Månedspris");

    return (
        <RadioButtonGroup
            legend="Velg prisvisning"
            name="prisvisning"
            inline={boolValues && boolValues["Inline"]}
            labelProps={{ srOnly: true }}
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

export const radioButtonPreselectedExampleCode = ({ boolValues }: ExampleComponentProps): string => `
<RadioButtonGroup
    legend="Velg prisvisning"
    name="prisvisning"
    inline={${!!boolValues?.["Inline"]}}
    labelProps={{ srOnly: true }}
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
>
    {choices.map((value) => (
        <RadioButton key={value} value={value}>{value}</RadioButton>
    ))}
</RadioButtonGroup>
`;
