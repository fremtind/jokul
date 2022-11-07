import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { ListExamples, listExamplesCode, listExamplesProps } from "./ListExample";
import "../../list/list.scss";

export default function Example() {
    return <DevExample component={ListExamples} knobs={listExamplesProps} codeExample={listExamplesCode} />;
}
