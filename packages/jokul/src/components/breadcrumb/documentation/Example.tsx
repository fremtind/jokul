import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { BreadcrumbExample, knobs } from "./BreadcrumbExample";

export default function Example() {
    return <DevExample component={BreadcrumbExample} knobs={knobs} />;
}
