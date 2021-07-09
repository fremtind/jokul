import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { ContentToggle } from "../src";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => (
    <div className="jkl-body">
        <ContentToggle showSecondary={!!boolValues?.["Flip"]} secondary="World">
            Hello
        </ContentToggle>
    </div>
);
