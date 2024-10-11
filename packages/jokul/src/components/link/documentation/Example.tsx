import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { LinkExample, knobs } from "./LinkExample";

export default function Example() {
    return <DevExample component={LinkExample} knobs={knobs} />;
}
