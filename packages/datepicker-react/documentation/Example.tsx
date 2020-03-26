import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { LabelVariant } from "@fremtind/jkl-core";
import "@fremtind/jkl-icon-button/icon-button.min.css";
import { DatePicker } from "../src";

export const Example = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"] ? "Du vil være forsikret fra denne datoen" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Du kan ikke velge en dato som har vært" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    return (
        <DatePicker
            label="Velg startdato for forsikringen"
            extended={boolValues && boolValues["Utvidet velger"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            variant={variant}
            errorLabel={errorLabel}
            helpLabel={helpLabel}
        />
    );
};

export default Example;
