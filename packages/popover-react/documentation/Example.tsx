import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    PopoverControlledExample,
    popoverControlledExampleCode,
    popoverExampleKnobs,
    PopoverUnControlledExample,
    popoverUnControlledExampleCode,
} from "./PopoverExample";
import "../../popover/popover.scss";
import "../../button/button.scss";
import "../../tabs/tabs.scss";

export default function Example() {
    return (
        <>
            <DevExample
                title="Controlled popover"
                component={PopoverControlledExample}
                codeExample={popoverControlledExampleCode}
                knobs={popoverExampleKnobs}
            />
            <DevExample
                title="Uncontrolled popover"
                component={PopoverUnControlledExample}
                codeExample={popoverUnControlledExampleCode}
                knobs={popoverExampleKnobs}
            />
        </>
    );
}
