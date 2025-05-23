import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import FlexExample, { flexExampleKnobs } from "./FlexExample.js";

export default function Example() {
    return <DevExample component={FlexExample} knobs={flexExampleKnobs} />;
}
