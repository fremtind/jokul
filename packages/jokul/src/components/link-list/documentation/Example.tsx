import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { knobs, OrderedLinkListExample, UnorderedLinkListExample } from "./LinkListExample.js";

export default function Example() {
    return (
        <>
            <DevExample component={OrderedLinkListExample} knobs={knobs} />;
            <DevExample component={UnorderedLinkListExample} knobs={knobs} />;
        </>
    );
}
