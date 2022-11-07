import React from "react";
import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import { ScaffoldExample, scaffoldExampleCode, scaffoldExampleKnobs } from "./ScaffoldExample";
import "../../scaffold/scaffold.scss";

export default function Example() {
    return <DevExample component={ScaffoldExample} code={scaffoldExampleCode} knobs={scaffoldExampleKnobs} />;
}
