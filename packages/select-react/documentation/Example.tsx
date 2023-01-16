import React from "react";
import { DevExample } from "../../../doc-utils";
import { selectCode, SelectExample, selectExampleKnobs } from "./SelectExample";
import "../../select/select.scss";
import "../../input-group/input-group.scss";
import "../../tooltip/tooltip.scss";

export default function Example() {
    return <DevExample component={SelectExample} knobs={selectExampleKnobs} codeExample={selectCode} />;
}
