import { LabelVariant } from "@fremtind/jkl-core";
import React, { FC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { FieldGroup } from "../src/index";

export const FieldGroupExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    return (
        <FieldGroup
            legend="Samleoverskrift for feltene"
            forceCompact={boolValues?.["Compact"]}
            variant={choiceValues?.["Variant"] as LabelVariant}
            helpLabel={boolValues?.["Med hjelpetekst"] ? "Hjelpetekst for feltene samlet" : undefined}
            errorLabel={boolValues?.["Med feil"] ? "Feilmelding for feltene samlet" : undefined}
            className="jkl-spacing-2xl--bottom"
        >
            <p className="jkl-body">her kan du sette inn innhold og felter</p>
        </FieldGroup>
    );
};

export const fieldGroupExampleCode: CodeExample = ({ boolValues, choiceValues }) => `
<FieldGroup
    legend="Samleoverskrift for feltene"
    forceCompact={${boolValues?.["Compact"]}}
    variant="${choiceValues?.["Variant"] as LabelVariant}"
    helpLabel=${boolValues?.["Med hjelpetekst"] ? `"Hjelpetekst for feltene samlet"` : `{undefined}`}
    errorLabel=${boolValues?.["Med feil"] ? `"Feilmelding for feltene samlet"` : `{undefined}`}
    className="jkl-spacing-2xl--bottom"
>
    <p className="jkl-body">her kan du sette inn innhold og felter</p>
</FieldGroup>
`;
