import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { FileExample, fileExampleKnobs } from "./FileExample.js";

import "../styles/_index.scss";

export default function Example() {
    return (
        <DevExample
            title="File"
            component={FileExample}
            knobs={fileExampleKnobs}
        />
    );
}
