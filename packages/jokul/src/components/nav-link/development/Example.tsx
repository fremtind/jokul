import { DevExample } from "utils/dev-example/DevExample.js";
import { NavLinkExample, knobs as navLinkKnobs } from "./NavLinkExample.js";

export default function Example() {
    return (
        <DevExample
            component={NavLinkExample}
            knobs={navLinkKnobs}
            title="NavLink"
        />
    );
}
