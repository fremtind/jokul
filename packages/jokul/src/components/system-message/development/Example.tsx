import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import {
    SystemMessageExample,
    systemMessageKnobs,
} from "./SystemMessageExample.js";

export default function Example() {
    return (
        <DevExample
            component={SystemMessageExample}
            knobs={systemMessageKnobs}
        />
    );
}
