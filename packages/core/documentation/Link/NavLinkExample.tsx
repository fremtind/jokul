import React from "react";

import { ExampleComponentProps } from "../../../../doc-utils";
import { NavLink } from "../../src";

export const NavLinkExample = ({ boolValues }: ExampleComponentProps) => (
    <NavLink
        className="jkl-body"
        href="#"
        active={boolValues && boolValues["Aktiv"]}
        inverted={boolValues && boolValues["Invertert"]}
        back={boolValues && boolValues["Back"]}
    >
        Gå til forsiden
    </NavLink>
);
