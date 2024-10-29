import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    ModalExample,
    dialogExampleCode,
    dialogExampleKnobs,
} from "./ModalExample";
import "../../button/button.scss";
import "../../icon-button/icon-button.scss";
import "../../icons/icons.scss";
import "../../modal/modal.scss";

export default function Example() {
    return (
        <DevExample
            component={ModalExample}
            codeExample={dialogExampleCode}
            knobs={dialogExampleKnobs}
        />
    );
}
