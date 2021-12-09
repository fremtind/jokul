import React from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { SummaryTable } from "../src";
import { mockColumnDescriptions, mockItems, mockFooter } from "../mocks";
import "./SummaryTableExample.scss";

export const SummaryTableExample: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="summary-table-example">
            <SummaryTable columnDescriptions={mockColumnDescriptions} items={mockItems} footer={mockFooter} />
        </div>
    );
};

const SOFT_HYPHEN = "\u00AD";

export const summaryTableExampleCode: CodeExample = `
<SummaryTable
    columnDescriptions={["Produkt", "Pris"]}
    items={[
        { label: "Person", value: "", bold: true },
        { label: "Barne${SOFT_HYPHEN}forsikring", value: "200 kr/mnd" },
        { label: "Behandlings${SOFT_HYPHEN}forsikring", value: "200 kr/mnd" },
        { label: "Skade", value: "", bold: true },
        { label: "Innboforsikring", value: "100 kr/mnd" },
        { label: "Reiseforsikring", value: "100 kr/mnd" },
    ]}
    footer={{ label: "Total sum", value: "600 kr/mnd" }}
/>
`;
