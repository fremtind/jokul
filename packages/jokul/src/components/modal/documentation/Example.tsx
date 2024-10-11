import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { ModalExample, dialogExampleKnobs } from "./ModalExample";

export default function Example() {
    return <DevExample component={ModalExample} knobs={dialogExampleKnobs} />;
}
