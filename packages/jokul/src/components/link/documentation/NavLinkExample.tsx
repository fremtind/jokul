import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { NavLink } from "../NavLink.js";

export const knobs: ExampleKnobsProps = {
    boolProps: ["Aktiv", "Tilbakelenke"],
};

export const NavLinkExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const active = boolValues?.["Aktiv"];
    const back = boolValues?.["Tilbakelenke"];
    return (
        <NavLink href="#" active={active} back={back}>
            NavLenke
        </NavLink>
    );
};
