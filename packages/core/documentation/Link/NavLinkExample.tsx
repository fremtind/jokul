import React, { VFC } from "react";

import { ExampleComponentProps } from "../../../../doc-utils";
import { NavLink } from "../../src";

export const NavLinkExample: VFC<ExampleComponentProps> = ({ boolValues }) => (
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
