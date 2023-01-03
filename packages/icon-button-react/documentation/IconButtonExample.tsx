import React, { FC } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { SearchIcon } from "../../icons-react/src/icons/search/SearchIcon";
import { IconButton } from "../src";

export const iconButtonExampleKnobs: ExampleKnobsProps = {};

function onClick() {
    console.log("Hallo");
}

export const IconButtonExample: FC<ExampleComponentProps> = () => {
    return (
        <p className="jkl-body">
            Lorem ipsum
            <IconButton onClick={onClick} title="Søk" className="jkl-spacing-4--left">
                <SearchIcon variant="inherit" />
            </IconButton>
        </p>
    );
};

export const iconButtonExampleCode: CodeExample = () => `
<IconButton onClick={onClick} title="Søk">
    <SearchIcon />
</IconButton>
`;
