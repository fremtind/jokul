import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { TagExample, tagExampleKnobs } from "./TagExample";

export default function Example() {
    return <DevExample title="Tag" component={TagExample} knobs={tagExampleKnobs} />;
}
