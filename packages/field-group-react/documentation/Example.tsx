import React from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { FieldGroup } from "../src/index";

interface Props {
    boolValues: { [key: string]: boolean };
    choiceValues: { [key: string]: string };
}

export function Example({ boolValues, choiceValues }: Props) {
    const helpLabel = boolValues["Med hjelpetekst"] ? "Hjelpetekst for feltene samlet" : undefined;
    const errorLabel = boolValues["Med feil"] ? "Feilmelding for feltene samlet" : undefined;
    const variant = choiceValues["Variant"] as LabelVariant;

    return (
        <FieldGroup
            forceCompact={boolValues["Kompakt"]}
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
