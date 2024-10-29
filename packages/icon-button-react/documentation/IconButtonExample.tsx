import { SearchIcon } from "@fremtind/jkl-icons-react/src/icons/SearchIcon";
import React, { FC } from "react";
import {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { IconButton } from "../src";

export const iconButtonExampleKnobs: ExampleKnobsProps = {};

function onClick() {
    console.log("Hallo");
}

export const IconButtonExample: FC<ExampleComponentProps> = () => {
    return (
        <p className="jkl-body">
            <IconButton onClick={onClick} title="Søk">
                <SearchIcon />
            </IconButton>
        </p>
    );
};

export const iconButtonExampleCode: CodeExample = () => `
<IconButton onClick={onClick} title="Søk">
    <SearchIcon />
</IconButton>
`;
