import React from "react";
import type { ExampleComponentProps } from "utils/dev-example/index.js";
import { SummaryTable } from "../SummaryTable.js";
import { mockProps } from "./mockContent.js";

export const SummaryTableExample: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="summary-table-example">
            <SummaryTable {...mockProps} />
        </div>
    );
};
