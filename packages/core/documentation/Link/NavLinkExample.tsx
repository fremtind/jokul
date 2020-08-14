import React from "react";

import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { NavLink } from "../../src";

export const NavLinkExample = ({ boolValues }: ExampleComponentProps) => (
    <NavLink className="jkl-body" href="#" active={boolValues && boolValues["Aktiv"]}>
        Gå til forsiden
    </NavLink>
);
