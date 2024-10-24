import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { ControlledExample, knobs as controlledKnobs } from "./ControlledExample";
import { UncontrolledExample, knobs as uncontrolledKnobs } from "./UncontrolledExample";

import "./styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={UncontrolledExample} knobs={uncontrolledKnobs} />
            <DevExample component={ControlledExample} knobs={controlledKnobs} />
        </>
    );
}
