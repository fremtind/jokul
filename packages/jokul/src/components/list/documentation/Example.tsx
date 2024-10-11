import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { ListExamples, knobs } from "./ListExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={ListExamples} knobs={knobs} style={{ minWidth: "30ch" }} />
        </>
    );
}
