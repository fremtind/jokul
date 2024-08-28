import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    OrderedLinkListExample,
    orderedLinkListExample,
    UnorderedLinkListExample,
    unorderedLinkListExample,
} from "./LinkListExample";
import { ListExamples, listExamplesCode, listExamplesProps } from "./ListExample";
import "../../list/list.scss";

export default function Example() {
    return (
        <>
            <DevExample
                component={OrderedLinkListExample}
                codeExample={orderedLinkListExample}
                style={{ minWidth: "30ch" }}
            />
            <DevExample
                component={UnorderedLinkListExample}
                codeExample={unorderedLinkListExample}
                style={{ minWidth: "30ch" }}
            />
            <DevExample
                component={ListExamples}
                knobs={listExamplesProps}
                codeExample={listExamplesCode}
                style={{ minWidth: "30ch" }}
            />
        </>
    );
}
