import React, { FC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Scaffold } from "../src";

export const ScaffoldExample: FC<ExampleComponentProps> = () => {
    return (
        <div>
            <Scaffold>Edit me!</Scaffold>
        </div>
    );
};

export default ScaffoldExample;
