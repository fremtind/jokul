import React from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { FieldGroup } from "../src/index";

export function Example({ boolValues, choiceValues }: ExampleComponentProps) {
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Hjelpetekst for feltene samlet" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Feilmelding for feltene samlet" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    return (
        <FieldGroup
            forceCompact={boolValues && boolValues["Kompakt"]}
            variant={variant}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            className="jkl-spacing--bottom-3"
            legend="Samleoverskrift for feltene"
        >
            <p className="jkl-body">her kan du sette inn innhold og felter</p>
        </FieldGroup>
    );
}

export default Example;
