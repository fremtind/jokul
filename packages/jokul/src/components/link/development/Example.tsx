import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { LinkExample, knobs as linkKnobs } from "./LinkExample.js";

export default function Example() {
    return (
        <DevExample component={LinkExample} knobs={linkKnobs} title="Link" />
    );
}
