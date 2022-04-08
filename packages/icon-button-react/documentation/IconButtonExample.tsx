import React, { VFC } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { IconButton, IconVariant } from "../src";

export const iconButtonExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "Variant",
            values: ["clear", "search", "calendar"],
            defaultValue: 1,
        },
    ],
};

function onClick() {
    console.log("Button Clicked!");
}

export const IconButtonExample: VFC<ExampleComponentProps> = ({ choiceValues }) => {
    const type = choiceValues && (choiceValues["Variant"] as IconVariant);

    return (
        <>
            <IconButton iconType={type} onClick={onClick} buttonTitle="Vis knappen" />
        </>
    );
};

export const iconButtonExampleCode: CodeExample = ({ choiceValues }) => `
<IconButton
    buttonTitle="Beskrivelse av handlingen for skjermlesere"
    iconType="${choiceValues?.["Variant"]}"
    onClick={onClick}
/>
`;
