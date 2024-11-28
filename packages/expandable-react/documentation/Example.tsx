import React from "react";
import { DevExample } from "../../../doc-utils";
import "../../expandable/expandable.scss";
import "../../icons/icons.scss";
import { ExpandableExample, knobs } from "./ExpandableExample";

export default function Example() {
    return (
        <>
            <DevExample
                title="Expandable"
                component={ExpandableExample}
                knobs={knobs}
            />
        </>
    );
}
