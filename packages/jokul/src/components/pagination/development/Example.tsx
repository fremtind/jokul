import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { PaginationExample, knobs } from "./PaginationExample.js";

import "./styles.scss";

export default function Example() {
    return <DevExample component={PaginationExample} knobs={knobs} />;
}
