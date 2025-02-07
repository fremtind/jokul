import { DevExample } from "doc-utils/DevExample.js";
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
