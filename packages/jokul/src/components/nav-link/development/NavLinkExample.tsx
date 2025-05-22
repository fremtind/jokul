import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import React, { type FC } from "react";
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
