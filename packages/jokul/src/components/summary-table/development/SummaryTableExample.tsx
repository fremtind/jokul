import { ExampleComponentProps } from "doc-utils/index.js";
import React from "react";
import { mockProps } from "../mocks.js";
import { SummaryTable } from "../SummaryTable.js";

export const SummaryTableExample: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="summary-table-example">
            <SummaryTable {...mockProps} />
        </div>
    );
};
