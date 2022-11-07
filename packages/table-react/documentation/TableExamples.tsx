import React, { FC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import ActionTableExample, { actionTableExampleCode } from "./ActionTableExample";
import ClickableTableExample, { clickableTableExampleCode } from "./ClickableTableExample";
import TableExample, { tableExampleCode } from "./TableExample";

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

export const tableExamplesCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => {
    const action = choiceValues?.["Variant"] === "Med handling";
    const clickable = choiceValues?.["Variant"] === "Klikkbar rad";

    if (action) {
        return actionTableExampleCode({ boolValues, choiceValues });
    }

    if (clickable) {
        return clickableTableExampleCode({ boolValues, choiceValues });
    }

    return tableExampleCode({ boolValues, choiceValues });
};
