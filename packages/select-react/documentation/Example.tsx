import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { selectCode, SelectExample, selectExampleKnobs } from "./SelectExample";
import "../../select/select.scss";

export default function Example() {
    return <DevExample component={SelectExample} knobs={selectExampleKnobs} codeExample={selectCode} />;
}
