import { ExampleComponentProps } from "doc-utils/index.js";
import React, { FC } from "react";
import ActionTableExample from "./ActionTableExample.js";
import ClickableTableExample from "./ClickableTableExample.js";
import TableExample from "./TableExample.js";

export const tableExamplesProps = {
    boolProps: ["Skjul overskrift"],
    choiceProps: [
        {
            name: "Variant",
            values: ["Standard", "Med handling", "Klikkbar rad"],
            defaultValue: 0,
        },
        {
            name: "Mobilvisning",
            values: ["Tabell", "Liste"],
            defaultValue: 0,
        },
    ],
};

const TableExamples: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const action = choiceValues?.["Variant"] === "Med handling";
    const clickable = choiceValues?.["Variant"] === "Klikkbar rad";

    let C = TableExample;
    if (action) {
        C = ActionTableExample;
    } else if (clickable) {
        C = ClickableTableExample;
    }

    return <C boolValues={boolValues} choiceValues={choiceValues} />;
};

export default TableExamples;
