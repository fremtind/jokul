import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
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
            />
            <DevExample
                title="Custom widget"
                component={CustomWidgetExample}
                knobs={customWidgetKnobs}
            />
        </>
    );
}
