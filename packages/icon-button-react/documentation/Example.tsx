import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { IconButton } from "../src";
import { IconVariant } from "../src/IconButton";

export const Example: React.FC<ExampleComponentProps> = ({ choiceValues }) => {
    const type = choiceValues && (choiceValues["Type"] as IconVariant);

    return (
        <>
            <IconButton iconType={type} buttonTitle="Vis knappen"/>
        </>
    );
};

export default Example;
