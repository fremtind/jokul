import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { TagExample, tagExampleKnobs } from "./TagExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return <DevExample title="Tag" component={TagExample} knobs={tagExampleKnobs} />;
}
