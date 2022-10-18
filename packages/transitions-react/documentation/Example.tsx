import React from "react";
import { DevExample } from "../../../doc-utils";
import { FadeExample, fadeExampleCode, fadeExampleKnobs } from "./FadeExample";
import "@fremtind/jkl-toggle-switch/toggle-switch.scss";
import "@fremtind/jkl-card/card.scss";
import "../../transitions/transitions.scss";

export default function Example() {
    return <DevExample component={FadeExample} codeExample={fadeExampleCode} knobs={fadeExampleKnobs} />;
}
