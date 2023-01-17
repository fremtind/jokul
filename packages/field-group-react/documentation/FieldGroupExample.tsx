import { Link } from "@fremtind/jkl-core";
import type { LabelVariant } from "@fremtind/jkl-input-group-react";
import React, { FC } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { FieldGroup } from "../src/index";

export const fieldGroupExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil", "Med tooltip"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const FieldGroupExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
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
        <FieldGroup
            legend="Samleoverskrift for feltene"
            labelProps={{ variant: choiceValues?.["Variant"] as LabelVariant }}
            helpLabel={boolValues?.["Med hjelpetekst"] ? "Hjelpetekst for feltene samlet" : undefined}
            errorLabel={boolValues?.["Med feil"] ? "Feilmelding for feltene samlet" : undefined}
            tooltipProps={tooltip}
        >
            <p>her kan du sette inn innhold og felter</p>
        </FieldGroup>
    );
};

export const fieldGroupExampleCode: CodeExample = ({ boolValues, choiceValues }) => `
<FieldGroup
    legend="Samleoverskrift for feltene"
    variant="${choiceValues?.["Variant"] as LabelVariant}"
    helpLabel=${boolValues?.["Med hjelpetekst"] ? `"Hjelpetekst for feltene samlet"` : `{undefined}`}
    errorLabel=${boolValues?.["Med feil"] ? `"Feilmelding for feltene samlet"` : `{undefined}`}${
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
    <p>her kan du sette inn innhold og felter</p>
</FieldGroup>
`;
