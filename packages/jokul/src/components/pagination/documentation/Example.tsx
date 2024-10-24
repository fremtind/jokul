import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { knobs, PaginationExample } from "./PaginationExample.js";

import "./styles.scss";

export default function Example() {
    return <DevExample component={PaginationExample} knobs={knobs} />;
}
