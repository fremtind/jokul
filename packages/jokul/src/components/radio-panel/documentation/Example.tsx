import React from "react";
import { DevExample } from "../../../../../../utils/dev-example/index.js";
import { ControlledExample, knobs as controlledKnobs } from "./ControlledExample.js";
import { UncontrolledExample, knobs as uncontrolledKnobs } from "./UncontrolledExample.js";

import "./styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={UncontrolledExample} knobs={uncontrolledKnobs} />
            <DevExample component={ControlledExample} knobs={controlledKnobs} />
        </>
    );
}
