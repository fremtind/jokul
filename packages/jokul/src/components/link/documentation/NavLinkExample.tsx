import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { NavLink } from "../NavLink.js";

export const knobs: ExampleKnobsProps = {
    boolProps: ["active", "back"],
};

export const NavLinkExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const active = boolValues?.["active"];
    const back = boolValues?.["back"];
    return (
        <div>
            <NavLink href="#" active={active} back={back}>
                NavLenke
            </NavLink>
        </div>
    );
};
