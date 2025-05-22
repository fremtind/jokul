import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { knobs, PaginationExample } from "./PaginationExample.js";

import "./styles.scss";

export default function Example() {
    return <DevExample component={PaginationExample} knobs={knobs} />;
}
