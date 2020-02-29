import React from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { DatePicker } from "../src";

import "@fremtind/jkl-core/core.scss";
import "@fremtind/jkl-datepicker/datepicker.min.css";

interface Props {
    boolValues: { [key: string]: boolean };
    choiceValues: { [key: string]: string };
}

const Example = ({ boolValues, choiceValues }: Props) => {
    const helpLabel = boolValues["Med hjelpetekst"] ? "Du vil være forsikret fra denne datoen" : undefined;
    const errorLabel = boolValues["Med feil"] ? "Du kan ikke velge en dato som har vært" : undefined;
    const variant = choiceValues["Variant"] as LabelVariant;

    return (
        <DatePicker
            label="Velg startdato for forsikringen"
            extended={boolValues["Utvidet velger"]}
            forceCompact={boolValues["Kompakt"]}
            variant={variant}
            errorLabel={errorLabel}
            helpLabel={helpLabel}
        />
    );
};

export default Example;
