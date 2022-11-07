import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { TagExample, tagExampleKnobs } from "./TagExample";
import "../../tag/tag.scss";
import "../../icon-button/icon-button.scss";

export default function Example() {
    return <DevExample title="Tag" component={TagExample} knobs={tagExampleKnobs} />;
}
