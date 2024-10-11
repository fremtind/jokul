import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { SystemMessageExample, systemMessageKnobs } from "./SystemMessageExample";

export default function Example() {
    return <DevExample component={SystemMessageExample} knobs={systemMessageKnobs} />;
}
