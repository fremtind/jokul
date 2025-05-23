import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import {
    OrderedLinkListExample,
    UnorderedLinkListExample,
    knobs,
} from "./LinkListExample.js";

export default function Example() {
    return (
        <>
            <DevExample component={OrderedLinkListExample} knobs={knobs} />
            <DevExample component={UnorderedLinkListExample} knobs={knobs} />
        </>
    );
}
