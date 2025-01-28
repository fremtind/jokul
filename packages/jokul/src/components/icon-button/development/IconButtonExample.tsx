import React, { FC } from "react";
import { IconButton } from "..";
import {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../../../../utils/dev-example";
import { SearchIcon } from "../../icon";

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
