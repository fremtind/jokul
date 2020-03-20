import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { IconButton } from "../src";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    return (
        <>
            <IconButton iconType="clear" />
            <IconButton iconType="search" />
        </>
    );
};

export default Example;
