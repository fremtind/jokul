import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import {
    ControlledExample,
    knobs as controlledKnobs,
} from "./ControlledExample.js";
import {
    CustomWidgetExample,
    knobs as customWidgetKnobs,
} from "./CustomWidgetExample.js";
import {
    UnControlledExample,
    knobs as uncontrolledKnobs,
} from "./UnControlledExample.js";

export default function Example() {
    return (
        <>
            <DevExample
                title="UnControlled"
                component={UnControlledExample}
                knobs={uncontrolledKnobs}
                codeExample="console.log('ohai)"
            />
            <DevExample
                title="Controlled"
                component={ControlledExample}
                knobs={controlledKnobs}
            />
            <DevExample
                title="Custom widget"
                component={CustomWidgetExample}
                knobs={customWidgetKnobs}
            />
        </>
    );
}
