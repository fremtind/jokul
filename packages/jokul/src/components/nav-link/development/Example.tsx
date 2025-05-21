import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { knobs as navLinkKnobs, NavLinkExample } from "./NavLinkExample.js";

export default function Example() {
    return (
        <DevExample
            component={NavLinkExample}
            knobs={navLinkKnobs}
            title="NavLink"
        />
    );
}
