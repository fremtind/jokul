import React from "react";
import { DatePicker } from "../src";
import "@fremtind/jkl-core/core.scss";
import "@fremtind/jkl-datepicker/datepicker.min.css";
import "@fremtind/jkl-core/normalize.css";

const englishMonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const englishDayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
type Variant = "small" | "medium" | "large";

interface Props {
    boolValues: { [key: string]: boolean };
    choiceValues: { [key: string]: string };
}

const Example = ({ boolValues, choiceValues }: Props) => {
    const helpLabel = boolValues["Med hjelpetekst"] ? "Du vil være forsikret fra denne datoen" : undefined;
    const errorLabel = boolValues["Med feil"] ? "Du kan ikke velge en dato som har vært" : undefined;
    const variant = choiceValues["Variant"] as Variant;

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
