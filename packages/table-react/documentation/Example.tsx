import React from "react";
import { DevExample } from "../../../doc-utils";
import ActionTableExample from "./ActionTableExample";
import ClickableTableExample from "./ClickableTableExample";
import DataTableExample from "./DataTableExample";
import ExpandableTableExample from "./ExpandableTableExample";
import MobileListTableExample from "./MobileListTableExample";
import "../../table/table.scss";
import "../../button/button.scss";
import "../../icons/animated-icons.scss";
import "../../expand-button/expand-button.scss";

export default function Example() {
    return (
        <>
            <DevExample
                title="DataTable"
                component={DataTableExample}
                knobs={{
                    boolProps: ["Compact"],
                }}
            />
            <DevExample
                title="Mobil: tabell til liste"
                component={MobileListTableExample}
                knobs={{
                    choiceProps: [
                        {
                            name: "Mobilvisning",
                            values: ["Tabell", "Liste"],
                            defaultValue: 0,
                        },
                    ],
                }}
            />
            <DevExample
                title="Klikkbar tabell"
                component={ClickableTableExample}
                knobs={{
                    boolProps: ["Compact", "Markér v/ klikk"],
                    choiceProps: [
                        {
                            name: "Mobilvisning",
                            values: ["Tabell", "Liste"],
                            defaultValue: 0,
                        },
                    ],
                }}
            />
            <DevExample
                title="Tabell med knapper"
                component={ActionTableExample}
                knobs={{
                    boolProps: ["Compact"],
                    choiceProps: [
                        {
                            name: "Mobilvisning",
                            values: ["Tabell", "Liste"],
                            defaultValue: 0,
                        },
                    ],
                }}
            />
            <DevExample
                title="Tabell med ekspanderbare rader"
                component={ExpandableTableExample}
                knobs={{
                    boolProps: ["Kompakt", "Markér v/ klikk", "Tekst i ekspandérknapp"],
                    choiceProps: [
                        {
                            name: "Mobilvisning",
                            values: ["Tabell", "Liste"],
                            defaultValue: 0,
                        },
                    ],
                }}
            />
        </>
    );
}
