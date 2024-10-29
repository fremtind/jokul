import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { TagExample, tagExampleKnobs } from "./TagExample.js";

export default function Example() {
    return (
        <DevExample
            title="Tag"
            component={TagExample}
            knobs={tagExampleKnobs}
        />
    );
}
