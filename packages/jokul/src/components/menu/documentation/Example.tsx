import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
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
