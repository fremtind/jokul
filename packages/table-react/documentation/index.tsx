import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

import "../../button/button.css";
import "../../icons/animated-icons.css";
import "../../expand-button/expand-button.css";
// Import actual example and component stylesheet (specific for this component):
import "@fremtind/jkl-table/table.css";
import DataTableExample from "./DataTableExample";
import ClickableTableExample from "./ClickableTableExample";
import ActionTableExample from "./ActionTableExample";
import MobileListTableExample from "./MobileListTableExample";
import ExpandableTableExample from "./ExpandableTableExample";

renderExample(
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
                boolProps: ["Kompakt"],
                choiceProps: [
                    {
                        name: "Mobilvisning",
                        values: ["Tabell", "Liste"],
                        defaultValue: 0,
                    },
                ],
            }}
        />
    </>,
    document.getElementById("app"),
);
