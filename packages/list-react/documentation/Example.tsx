import React from "react";
import { DevExample } from "../../../doc-utils";
import { ListExamples, listExamplesCode, listExamplesProps } from "./ListExample";
import "../../list/list.scss";

export default function Example() {
    return <DevExample component={ListExamples} knobs={listExamplesProps} codeExample={listExamplesCode} />;
}
