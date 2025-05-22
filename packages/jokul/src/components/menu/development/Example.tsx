import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import MenuExample, { MenuExampleKnobs } from "./MenuExample.js";
import MenuToggleSwitchExample, {
    MenuToggleSwitchExampleKnobs,
} from "./MenuToggleSwitchExample.js";

export default function Example() {
    return (
        <>
            <DevExample component={MenuExample} knobs={MenuExampleKnobs} />
            <DevExample
                component={MenuToggleSwitchExample}
                knobs={MenuToggleSwitchExampleKnobs}
            />
        </>
    );
}
