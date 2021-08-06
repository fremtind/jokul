import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components/src";
import { ContentToggle } from "../src";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => (
    <div className="jkl-body">
        <ContentToggle
            variant={choiceValues?.["Variant"] as "flip" | "fade"}
            showSecondary={!!boolValues?.["Bytt verdi"]}
            secondary="World!"
        >
            Hello
        </ContentToggle>
    </div>
);
