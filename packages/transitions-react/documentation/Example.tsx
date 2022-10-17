import React from "react";
import { DevExample } from "../../../doc-utils";
import { TransitionsExample, transitionsExampleCode, transitionsExampleKnobs } from "./TransitionsExample";
import "../../transitions/transitions.scss";

export default function Example() {
    return <DevExample component={TransitionsExample} code={transitionsExampleCode} knobs={transitionsExampleKnobs} />;
}
