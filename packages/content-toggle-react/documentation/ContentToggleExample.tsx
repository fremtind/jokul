import React from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { ContentToggle } from "../src";

export const ContentToggleExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => (
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

export const contentToggleExampleCode: CodeExample = ({ boolValues, choiceValues }) => `
<div className="jkl-body">
    <ContentToggle
        variant=${choiceValues?.["Variant"] as "flip" | "fade"}
        showSecondary={${boolValues?.["Bytt verdi"]}}
        secondary="World!"
    >
        Hello
    </ContentToggle>
</div>
`;
