import { LabelVariant, Link } from "@fremtind/jkl-core";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { InputGroup } from "../src";

export const inputGroupExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil", "Med tooltip"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const InputGroupExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const helpLabel = boolValues?.["Med hjelpetekst"] ? "Fødselsnummer består av 11 siffer" : undefined;
    const errorLabel = boolValues?.["Med feil"] ? "Du må fylle ut fødselsnummer, 11 siffer" : undefined;
    const labelProps = {
        variant: choiceValues?.["Variant"] as LabelVariant,
    };

    const tooltip = boolValues?.["Med tooltip"]
        ? {
              content: (
                  <>
                      Du må fylle ut fødelsnummer eller D-nummer. Se <Link href="">guiden vår</Link> hvis du er usikker
                      på hvordan du finner D-nummer.
                  </>
              ),
          }
        : undefined;

    return (
        <InputGroup
            label="Fødselsnummer"
            errorLabel={errorLabel}
            helpLabel={helpLabel}
            labelProps={labelProps}
            tooltipProps={tooltip}
        >
            <input type="text" />
        </InputGroup>
    );
};

export default InputGroupExample;

export const inputGroupExampleCode: CodeExample = ({ boolValues }) => `
<InputGroup
    label="Fødselsnummer"
    helpLabel=${boolValues?.["Med hjelpetekst"] ? `"Fødselsnummer består av 11 siffer"` : `{undefined}`}
    errorLabel=${boolValues?.["Med feil"] ? `"Du må fylle ut fødselsnummer, 11 siffer"` : `{undefined}`}${
    boolValues?.["Med tooltip"]
        ? `
    tooltipProps={{ content: (
        <>
            Du må fylle ut fødelsnummer eller D-nummer. Se <Link href="">guiden vår</Link> hvis du er usikker
            på hvordan Du finner D-nummer.
        </>
    )}}`
        : ""
}
>
    <input type="text" />
</InputGroup>
`;
