import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { HelpExample, helpExampleKnobs } from "./HelpExample.js";

export default function Example() {
    return (
        <DevExample
            title="Help"
            component={HelpExample}
            knobs={helpExampleKnobs}
            style={{
                alignItems: "center",
                justifyContent: "center",
            }}
        />
    );
}
