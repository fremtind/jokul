import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import {
    IconButtonExample,
    iconButtonExampleKnobs,
} from "./IconButtonExample.js";

export default function Example() {
    return (
        <DevExample
            component={IconButtonExample}
            knobs={iconButtonExampleKnobs}
        />
    );
}
