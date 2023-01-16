import React from "react";
import { DevExample } from "../../../doc-utils";
import { ScaffoldExample, scaffoldExampleCode, scaffoldExampleKnobs } from "./ScaffoldExample";
import "../../scaffold/scaffold.scss";

export default function Example() {
    return <DevExample component={ScaffoldExample} codeExample={scaffoldExampleCode} knobs={scaffoldExampleKnobs} />;
}
