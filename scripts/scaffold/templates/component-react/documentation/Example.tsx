import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Scaffold } from "../src";

export const Example: VFC<ExampleComponentProps> = () => {
    return (
        <div>
            <Scaffold>Edit me!</Scaffold>
        </div>
    );
};

export default Example;
