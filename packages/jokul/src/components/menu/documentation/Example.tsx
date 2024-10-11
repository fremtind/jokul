import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { MenuExample, MenuExampleKnobs } from "./MenuExample";
import { MenuToggleSwitchExample, MenuToggleSwitchExampleKnobs } from "./MenuToggleSwitchExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={MenuExample} knobs={MenuExampleKnobs} />
            <DevExample component={MenuToggleSwitchExample} knobs={MenuToggleSwitchExampleKnobs} />
        </>
    );
}
