import React, { FC } from "react";
import { NavLink } from "../../src";
import { ExampleComponentProps, ExampleKnobsProps } from "../@fremtind/jkl-internal-doc-utils";

export const navLinkExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Aktiv", "Back"],
};

export const NavLinkExample: FC<ExampleComponentProps> = ({ boolValues }) => (
    <p>
        <NavLink href="#" active={boolValues?.["Aktiv"]} back={boolValues?.["Back"]}>
            Gå til forsiden
        </NavLink>
    </p>
);

export const navLinkExampleCode = ({ boolValues }: ExampleComponentProps): string => `
<NavLink
    href="#"
    active={${boolValues?.["Aktiv"]}}
    back={${boolValues?.["Back"]}}
>
    Gå til forsiden
</NavLink>`;
