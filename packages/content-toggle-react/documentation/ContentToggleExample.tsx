import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { ContentToggle } from "../src";

export const contentToggleExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Bytt verdi"],
    choiceProps: [
        {
            name: "Variant",
            values: ["flip", "fade"],
            defaultValue: 0,
        },
    ],
};

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
