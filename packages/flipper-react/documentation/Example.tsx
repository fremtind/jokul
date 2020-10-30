import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components/src";
import { Flipper } from "../src";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => (
    <div className="jkl-body">
        <Flipper showFirst={!!boolValues?.["Flip"]} firstBorn="Hello" lastBorn="World" />
    </div>
);
