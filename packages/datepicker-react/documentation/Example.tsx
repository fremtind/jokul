import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { LabelVariant } from "@fremtind/jkl-core";
import { DatePicker } from "../src";

export const Example = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"] ? "Du vil være forsikret fra denne datoen" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Du kan ikke velge en dato som har vært" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    const logDate = (message: string) => (date: Date | undefined) => console.log(message, date);

    return (
        <DatePicker
            label="Velg startdato for forsikringen"
            extended={boolValues && boolValues["Utvidet velger"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            inverted={boolValues && boolValues["Invertert"]}
            variant={variant}
            errorLabel={errorLabel}
            helpLabel={helpLabel}
            onFocus={logDate("hello from onFocus")}
            onBlur={logDate("hello from onBlur")}
            onChange={logDate("hello from onChange")}
        />
    );
};

export default Example;
