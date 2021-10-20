import React, { VFC } from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { ExampleComponentProps } from "../../../doc-utils";
import { FieldGroup } from "../src/index";

export const Example: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Hjelpetekst for feltene samlet" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Feilmelding for feltene samlet" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    return (
        <FieldGroup
            forceCompact={boolValues && boolValues["Kompakt"]}
            variant={variant}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            className="jkl-spacing-2xl--bottom"
            legend="Samleoverskrift for feltene"
        >
            <p className="jkl-body">her kan du sette inn innhold og felter</p>
        </FieldGroup>
    );
};

export default Example;
