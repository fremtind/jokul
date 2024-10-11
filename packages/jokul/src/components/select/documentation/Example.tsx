import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { SelectExample, selectExampleKnobs } from "./SelectExample";

export default function Example() {
    return <DevExample component={SelectExample} knobs={selectExampleKnobs} />;
}
