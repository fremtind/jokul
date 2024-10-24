import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { SystemMessageExample, systemMessageKnobs } from "./SystemMessageExample.js";

export default function Example() {
    return <DevExample component={SystemMessageExample} knobs={systemMessageKnobs} />;
}
