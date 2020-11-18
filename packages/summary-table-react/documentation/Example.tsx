import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { SummaryTable } from "../src";
import { mockProps } from "../mocks";
import "./Example.scss";

export const Example = ({}: ExampleComponentProps) => {
    return (
        <div className="summary-table-example">
            <SummaryTable {...mockProps} />
        </div>
    );
};

export default Example;
