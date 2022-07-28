import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../doc-utils";
import { NavLink } from "../../src";

export const navLinkExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Aktiv", "Back", "Compact"],
};

export const NavLinkExample: FC<ExampleComponentProps> = ({ boolValues }) => (
    <div>
        <NavLink
            className={boolValues?.["Compact"] ? "jkl-small" : "jkl-body"}
            href="#"
            active={boolValues?.["Aktiv"]}
            back={boolValues?.["Back"]}
        >
            Gå til forsiden
        </NavLink>
    </div>
);

export const navLinkExampleCode = ({ boolValues }: ExampleComponentProps): string => `
<NavLink
    className="${boolValues?.["Compact"] ? "jkl-small" : "jkl-body"}"
    href="#"
    active={${boolValues?.["Aktiv"]}}
    back={${boolValues?.["Back"]}}
>
    Gå til forsiden
</NavLink>`;
