import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { SummaryTable } from "../src";
import { mockProps } from "../mocks";
import "./SummaryTableExample.scss";

export const SummaryTableExample: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="summary-table-example">
            <SummaryTable {...mockProps} />
        </div>
    );
};
