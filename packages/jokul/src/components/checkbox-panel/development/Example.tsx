import { DevExample } from "utils/dev-example/index.js";
import React from "react";
import {
    ControlledExample as CheckboxPanelControlledExample,
    knobs as checkboxPanelControlledKnobs,
} from "./ControlledExample.js";
import {
    UncontrolledExample as CheckboxPanelUncontrolledExample,
    knobs as checkboxPanelUncontrolledKnobs,
} from "./UncontrolledExample.js";

import "./styles.scss";

export default function Example() {
    return (
        <div style={{ marginBlock: 20 }}>
            <DevExample
                title="Uncontrolled variant"
                component={CheckboxPanelUncontrolledExample}
                knobs={checkboxPanelUncontrolledKnobs}
            />
            <DevExample
                title="Controlled variant"
                component={CheckboxPanelControlledExample}
                knobs={checkboxPanelControlledKnobs}
            />
        </div>
    );
}
