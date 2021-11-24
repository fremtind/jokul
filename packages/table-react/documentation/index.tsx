import faker from "faker";
import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

import "../../button/button.css";
import "../../icons/animated-icons.css";
// Import actual example and component stylesheet (specific for this component):
import "@fremtind/jkl-table/table.css";
import DataTableExample from "./DataTableExample";
import ClickableTableExample from "./ClickableTableExample";
import ActionTableExample from "./ActionTableExample";
import MobileListTableExample from "./MobileListTableExample";
import { DataTable } from "../src";

const columns = ["Kravnr", "Kravtype", "Status", "Årsakskode", "Avsetning", "Prosesser"];

const rows = Array.from(Array(100)).map(() => [
    String(faker.datatype.number()),
    faker.address.stateAbbr(),
    faker.lorem.word(),
    faker.system.semver(),
    faker.finance.amount(),
    faker.lorem.word(),
]);

renderExample(
    <>
        <DevExample
            title="DataTable"
            component={DataTableExample}
            knobs={{
                boolProps: ["Kompakt"],
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
                boolProps: ["Kompakt", "Markér v/ klikk"],
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
        <div>
            <DataTable caption="Lang tabell" columns={columns} rows={rows} />
        </div>
    </>,
    document.getElementById("app"),
);
