import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { FlexExample, flexExampleKnobs } from "./FlexExample";

export default function Example() {
    return <DevExample component={FlexExample} knobs={flexExampleKnobs} />;
}
