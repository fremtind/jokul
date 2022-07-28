import React from "react";
import { DevExample } from "../../../doc-utils";
import { selectCode, SelectExample, selectExampleKnobs } from "./SelectExample";
import "../../select/select.scss";

export default function Example() {
    return <DevExample component={SelectExample} knobs={selectExampleKnobs} codeExample={selectCode} />;
}
