import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import FlexExample, { flexExampleKnobs } from "./FlexExample.js";

export default function Example() {
    return <DevExample component={FlexExample} knobs={flexExampleKnobs} />;
}
