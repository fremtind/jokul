import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import ActionTableExample, { actionTableExampleKnobs } from "./ActionTableExample";
import ClickableTableExample, { clickableTableExampleKnobs } from "./ClickableTableExample";
import DataTableExample, { dataTableExampleKnobs } from "./DataTableExample";
import ExpandableTableExample, { expandableTableExampleKnobs } from "./ExpandableTableExample";
import HeadlessTableExample, { headlessTableExampleKnobs } from "./HeadlessTableExample";
import MobileListTableExample, { mobileListTableExampleKnobs } from "./MobileListTableExample";
import MobileScrollTableExample from "./MobileScrollTableExample";
import { PaginatedTableExample, paginatedTableExamplesProps } from "./PaginatedTableExample";
import { SortableTableExample, sortableTableExamplesProps } from "./SortableTableExample";
import StickyTableExample from "./StickyTableExample";

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
