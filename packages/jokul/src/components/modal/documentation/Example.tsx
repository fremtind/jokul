import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import ModalExample, { dialogExampleKnobs } from "./ModalExample.js";

export default function Example() {
    return <DevExample component={ModalExample} knobs={dialogExampleKnobs} />;
}
