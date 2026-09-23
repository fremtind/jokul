import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";

import { TagExample, TagInFlexExample } from "./TagExample.js";

export default function Example() {
    return (
        <>
            <DevExample title="Tag" component={TagExample} />
            <DevExample
                title="Tag i flex-container"
                component={TagInFlexExample}
            />
        </>
    );
}
