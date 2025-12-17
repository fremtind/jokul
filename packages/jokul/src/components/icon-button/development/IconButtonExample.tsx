import type { FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { SearchIcon } from "../../icon/icons/SearchIcon.js";
import { IconButton } from "../IconButton.js";

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
