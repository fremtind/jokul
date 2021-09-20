import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { LabelVariant } from "@fremtind/jkl-core";
import { DatePicker } from "../src";

const monthsIsh = (num: number) => {
    const raw = 1000 * 60 * 60 * 24 * (num * 30 - 5);
    return raw < 0 ? 12 + raw : raw;
};

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
            inverted={boolValues && boolValues["Invertert"]}
            variant={variant}
            errorLabel={errorLabel}
            helpLabel={helpLabel}
            disableBeforeDate={new Date(Date.now() - monthsIsh(2))}
            disableAfterDate={new Date(Date.now() + monthsIsh(5))}
            onFocus={(date) => console.log("hello from onFocus", date)}
            onBlur={(date) => console.log("hello from onBlur", date)}
            onChange={(date, _, meta) => {
                console.log("hello from onChange", date, meta);
            }}
        />
    );
};

export default Example;
