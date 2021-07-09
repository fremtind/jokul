import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { IconButton, IconVariant } from "../src";

function onClick() {
    console.log("Button Clicked!");
}

export const Example: React.FC<ExampleComponentProps> = ({ choiceValues }) => {
    const type = choiceValues && (choiceValues["Type"] as IconVariant);

    return (
        <>
            <IconButton iconType={type} onClick={onClick} buttonTitle="Vis knappen" />
        </>
    );
};

export default Example;
