import { formatValuta } from "@fremtind/jkl-formatters-util";
import React, { FC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { RadioButtonGroup, RadioButton } from "../src";

export const RadioButtonHelpLabelExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const [selectedValue, setSelectedValue] = React.useState("gjeldplus1");

    return (
        <RadioButtonGroup
            legend="Forsikringssum"
            name="forsikringssum"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        >
            <RadioButton value="gjeldplus1" helpLabel="Hele boliggjelden pluss en årsinntekt">
                {formatValuta(2_700_000)} (anbefalt)
            </RadioButton>
            <RadioButton value="gjeld" helpLabel="Hele boliggjelden">
                {formatValuta(2_000_000)}
            </RadioButton>
            <RadioButton value="annen">Annen sum</RadioButton>
        </RadioButtonGroup>
    );
};

export const radioButtonHelpLabelExampleCode: CodeExample = (): string => `
<RadioButtonGroup
    legend="Forsikringssum"
    name="forsikringssum"
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
>
    <RadioButton value="gjeldplus1" helpLabel="Hele boliggjelden pluss en årsinntekt">
        {formatValuta(2_700_000)} (anbefalt)
    </RadioButton>
    <RadioButton value="gjeld" helpLabel="Hele boliggjelden">
        {formatValuta(2_000_000)}
    </RadioButton>
    <RadioButton value="annen">Annen sum</RadioButton>
</RadioButtonGroup>
`;
