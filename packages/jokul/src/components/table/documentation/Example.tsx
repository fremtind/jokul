import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import ActionTableExample, { actionTableExampleKnobs } from "./ActionTableExample.js";
import ClickableTableExample, { clickableTableExampleKnobs } from "./ClickableTableExample.js";
import DataTableExample, { dataTableExampleKnobs } from "./DataTableExample.js";
import ExpandableTableExample, { expandableTableExampleKnobs } from "./ExpandableTableExample.js";
import HeadlessTableExample, { headlessTableExampleKnobs } from "./HeadlessTableExample.js";
import MobileListTableExample, { mobileListTableExampleKnobs } from "./MobileListTableExample.js";
import MobileScrollTableExample from "./MobileScrollTableExample.js";
import { PaginatedTableExample, paginatedTableExamplesProps } from "./PaginatedTableExample.js";
import { SortableTableExample, sortableTableExamplesProps } from "./SortableTableExample.js";
import StickyTableExample from "./StickyTableExample.js";

export default function Example() {
    return (
        <>
            <DevExample scrollable={true} title="Mobil: horisontal scroll" component={MobileScrollTableExample} />
            <DevExample
                scrollable={true}
                title="Mobil: tabell til liste"
                component={MobileListTableExample}
                knobs={mobileListTableExampleKnobs}
            />
            <DevExample
                scrollable={true}
                title="Skjulte overskrifter"
                component={HeadlessTableExample}
                knobs={headlessTableExampleKnobs}
            />
            <DevExample
                scrollable={true}
                title="DataTable"
                component={DataTableExample}
                knobs={dataTableExampleKnobs}
            />
            <DevExample
                scrollable={true}
                title="Rader med handling"
                component={ActionTableExample}
                knobs={actionTableExampleKnobs}
            />
            <DevExample
                scrollable={true}
                title="Klikkbar tabell"
                component={ClickableTableExample}
                knobs={clickableTableExampleKnobs}
            />
            <DevExample
                scrollable={true}
                title="Tabell med ekspanderbare rader"
                component={ExpandableTableExample}
                knobs={expandableTableExampleKnobs}
            />
            <DevExample title="Tabell med sticky header" component={StickyTableExample} />
            <DevExample
                scrollable={true}
                title="Paginert"
                component={PaginatedTableExample}
                knobs={paginatedTableExamplesProps}
            />
            <DevExample
                scrollable={true}
                title="Sorterbar"
                component={SortableTableExample}
                knobs={sortableTableExamplesProps}
            />
        </>
    );
}
