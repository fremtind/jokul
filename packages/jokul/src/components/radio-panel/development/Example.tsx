import { DevExample } from "utils/dev-example/index.js";
import {
    ControlledExample as RadioPanelControlledExample,
    knobs as radioPanelControlledKnobs,
} from "./ControlledExample.js";
import {
    UncontrolledExample as RadioPanelUncontrolledExample,
    knobs as radioPanelUncontrolledKnobs,
} from "./UncontrolledExample.js";

import "./styles.scss";

export default function Example() {
    return (
        <div style={{ marginBlock: 20 }}>
            <DevExample
                title="Uncontrolled variant"
                component={RadioPanelUncontrolledExample}
                knobs={radioPanelUncontrolledKnobs}
            />
            <DevExample
                title="Controlled variant"
                component={RadioPanelControlledExample}
                knobs={radioPanelControlledKnobs}
            />
        </div>
    );
}
