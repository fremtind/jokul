import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { OrderedLinkListExample, UnorderedLinkListExample, knobs } from "./LinkListExample";

export default function Example() {
    return (
        <>
            <DevExample component={OrderedLinkListExample} knobs={knobs} />;
            <DevExample component={UnorderedLinkListExample} knobs={knobs} />;
        </>
    );
}
