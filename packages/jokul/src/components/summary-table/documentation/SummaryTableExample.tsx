import React from "react";
import { SummaryTable } from "..";
import { ExampleComponentProps } from "../../../../../../doc-utils";
import { mockProps } from "../mocks";

export const SummaryTableExample: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="summary-table-example">
            <SummaryTable {...mockProps} />
        </div>
    );
};
