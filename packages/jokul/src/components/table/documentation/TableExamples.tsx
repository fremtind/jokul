import React, { FC } from "react";
import { ExampleComponentProps } from "../../../../../../utils/dev-example";
import ActionTableExample from "./ActionTableExample";
import ClickableTableExample from "./ClickableTableExample";
import TableExample from "./TableExample";

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
