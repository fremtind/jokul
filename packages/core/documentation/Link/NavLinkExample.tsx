import React from "react";

import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { NavLink } from "../../src";

export const NavLinkExample = ({ boolValues }: ExampleComponentProps) => (
    <NavLink
        className="jkl-body"
        href="#"
        active={boolValues && boolValues["Aktiv"]}
        inverted={boolValues && boolValues["Invertert"]}
    >
        Gå til forsiden
    </NavLink>
);
