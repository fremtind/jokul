import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { MenuExample, MenuExampleKnobs } from "./MenuExample";
import { MenuToggleSwitchExample, MenuToggleSwitchExampleKnobs } from "./MenuToggleSwitchExample";

export default function Example() {
    return (
        <>
            <DevExample component={MenuExample} knobs={MenuExampleKnobs} />
            <DevExample component={MenuToggleSwitchExample} knobs={MenuToggleSwitchExampleKnobs} />
        </>
    );
}
