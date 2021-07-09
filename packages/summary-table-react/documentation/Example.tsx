import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { SummaryTable } from "../src";
import { mockProps } from "../mocks";
import "./Example.scss";

export const Example: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="summary-table-example">
            <SummaryTable {...mockProps} />
        </div>
    );
};

export default Example;
