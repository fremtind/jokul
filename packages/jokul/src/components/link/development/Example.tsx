import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { knobs as linkKnobs, LinkExample } from "./LinkExample.js";
import { knobs as navLinkKnobs, NavLinkExample } from "./NavLinkExample.js";

export default function Example() {
    return (
        <>
            <DevExample
                component={LinkExample}
                knobs={linkKnobs}
                title="Link"
            />
            <DevExample
                component={NavLinkExample}
                knobs={navLinkKnobs}
                title="NavLink"
            />
        </>
    );
}
