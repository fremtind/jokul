import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components/src";
import { ContentToggle } from "../src";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => (
    <div className="jkl-body">
        <ContentToggle showSecondary={!!boolValues?.["Flip"]} secondary="World">
            Hello
        </ContentToggle>
    </div>
);
