import React from "react";
import { DevExample } from "../../../doc-utils";
import ActionTableExample, { actionTableExampleCode, actionTableExampleKnobs } from "./ActionTableExample";
import ClickableTableExample, { clickableTableExampleCode, clickableTableExampleKnobs } from "./ClickableTableExample";
import DataTableExample, { dataTableExampleCode, dataTableExampleKnobs } from "./DataTableExample";
import ExpandableTableExample, {
    expandableTableExampleCode,
    expandableTableExampleKnobs,
} from "./ExpandableTableExample";
import HeadlessTableExample, { headlessTableExampleCode, headlessTableExampleKnobs } from "./HeadlessTableExample";
import MobileListTableExample, {
    mobileListTableExampleCode,
    mobileListTableExampleKnobs,
} from "./MobileListTableExample";
import MobileScrollTableExample, { mobileScrollTableExampleCode } from "./MobileScrollTableExample";
import { PaginatedTableExample, paginatedTableExampleCode, paginatedTableExamplesProps } from "./PaginatedTableExample";
import { SortableTableExample, sortableTableExampleCode, sortableTableExamplesProps } from "./SortableTableExample";
import StickyTableExample, { stickyTableExampleCode } from "./StickyTableExample";
import "../../table/table.scss";
import "../../button/button.scss";
import "../../icons/icons.scss";
import "../../input-group/input-group.scss";
import "../../select/select.scss";
import "../../text-input/text-input.scss";
import "../../expand-button/expand-button.scss";

export default function Example() {
    return (
        <>
            <DevExample
                scrollable={true}
                title="Mobil: horisontal scroll"
                component={MobileScrollTableExample}
                codeExample={mobileScrollTableExampleCode}
            />
            <DevExample
                scrollable={true}
                title="Mobil: tabell til liste"
                component={MobileListTableExample}
                knobs={mobileListTableExampleKnobs}
                codeExample={mobileListTableExampleCode}
            />
            <DevExample
                scrollable={true}
                title="Skjulte overskrifter"
                component={HeadlessTableExample}
                codeExample={headlessTableExampleCode}
                knobs={headlessTableExampleKnobs}
            />
            <DevExample
                scrollable={true}
                title="DataTable"
                component={DataTableExample}
                knobs={dataTableExampleKnobs}
                codeExample={dataTableExampleCode}
            />
            <DevExample
                scrollable={true}
                title="Rader med handling"
                component={ActionTableExample}
                knobs={actionTableExampleKnobs}
                codeExample={actionTableExampleCode}
            />
            <DevExample
                scrollable={true}
                title="Klikkbar tabell"
                component={ClickableTableExample}
                knobs={clickableTableExampleKnobs}
                codeExample={clickableTableExampleCode}
            />
            <DevExample
                scrollable={true}
                title="Tabell med ekspanderbare rader"
                component={ExpandableTableExample}
                knobs={expandableTableExampleKnobs}
                codeExample={expandableTableExampleCode}
            />
            <DevExample
                title="Tabell med sticky header"
                component={StickyTableExample}
                codeExample={stickyTableExampleCode}
            />
            <DevExample
                scrollable={true}
                title="Paginert"
                component={PaginatedTableExample}
                knobs={paginatedTableExamplesProps}
                codeExample={paginatedTableExampleCode}
            />
            <DevExample
                scrollable={true}
                title="Sorterbar"
                component={SortableTableExample}
                knobs={sortableTableExamplesProps}
                codeExample={sortableTableExampleCode}
            />
        </>
    );
}
