import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { BreadcrumbExample, knobs } from "./BreadcrumbExample.js";

export default function Example() {
    return <DevExample component={BreadcrumbExample} knobs={knobs} />;
}
