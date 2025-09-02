import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SummaryTable as SummaryTableComponent } from "../SummaryTable.js";
import { SummaryTableRow } from "../SummaryTableRow.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/SummaryTable",
    component: SummaryTableComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SummaryTableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const SOFT_HYPHEN = "\u00AD";

export const SummaryTable: Story = {
    args: {
        caption: "Example",
        header: ["Product", "Price"],
        body: (
            <>
                <SummaryTableRow
                    header={`Uføre${SOFT_HYPHEN}pensjon`}
                    content="340,00 kr/mnd"
                />
                <SummaryTableRow
                    className="summary-table-example__custom-row"
                    header={`Livs${SOFT_HYPHEN}forsikring`}
                    content="Tatt ut av tilbudet"
                />
                <SummaryTableRow
                    header={`Innbo${SOFT_HYPHEN}forsikring`}
                    content="122,00 kr/mnd"
                />
                <SummaryTableRow
                    header={`Reise${SOFT_HYPHEN}forsikring`}
                    content="249,00 kr/mnd"
                />
                <SummaryTableRow
                    className="summary-table-example__custom-row"
                    header="Rabatt"
                    content="- 17,50 kr/mnd"
                />
            </>
        ),
        footer: (
            <>
                <SummaryTableRow header="Total sum" content="693,50 kr/mnd" />
                <SummaryTableRow
                    header={
                        <span className="jkl-sr-only">Total sum per år</span>
                    }
                    content="8322,50 kr/mnd"
                />
            </>
        ),
    },
};
