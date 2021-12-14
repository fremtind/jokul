import React, { VFC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { IconButton, IconVariant } from "../src";

function onClick() {
    console.log("Button Clicked!");
}

export const IconButtonExample: VFC<ExampleComponentProps> = ({ choiceValues }) => {
    const type = choiceValues && (choiceValues["Type"] as IconVariant);

    return (
        <>
            <IconButton iconType={type} onClick={onClick} buttonTitle="Vis knappen" />
        </>
    );
};

export const iconButtonExampleCode: CodeExample = ({ choiceValues }) => `
<IconButton
    buttonTitle="Beskrivelse av handlingen for skjermlesere"
    iconType="${choiceValues?.["Type"]}"
    onClick={onClick}
/>
`;
