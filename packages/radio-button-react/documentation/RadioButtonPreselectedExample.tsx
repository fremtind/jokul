import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { RadioButtonGroup, RadioButton } from "../src";

export const RadioButtonPreselectedExample: VFC<ExampleComponentProps> = ({ boolValues }) => {
    const choices = ["Månedspris", "Årspris"];
    const [selectedValue, setSelectedValue] = React.useState("Månedspris");

    return (
        <RadioButtonGroup
            legend="Velg prisvisning"
            name="prisvisning"
            inline={boolValues && boolValues["Inline"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            labelProps={{ srOnly: true }}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        >
            {choices.map((value) => (
                <RadioButton key={value} label={value} value={value} />
            ))}
        </RadioButtonGroup>
    );
};

export const radioButtonPreselectedExampleCode = ({ boolValues }: ExampleComponentProps): string => `
<RadioButtonGroup
    legend="Velg prisvisning"
    name="prisvisning"
    inline={${!!boolValues?.["Inline"]}}
    forceCompact={${!!boolValues?.["Kompakt"]}}
    labelProps={{ srOnly: true }}
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
>
    {choices.map((value) => (
        <RadioButton key={value} label={value} value={value} />
    ))}
</RadioButtonGroup>
`;
