import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { knobs, PaginationExample } from "./PaginationExample";

import "./styles.scss";

export default function Example() {
    return <DevExample component={PaginationExample} knobs={knobs} />;
}
