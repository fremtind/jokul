import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { BreadcrumbExample, knobs } from "./BreadcrumbExample.js";

export default function Example() {
    return <DevExample component={BreadcrumbExample} knobs={knobs} />;
}
