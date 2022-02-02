import React, { VFC } from "react";

import { ExampleComponentProps } from "../../../../doc-utils";
import { NavLink } from "../../src";

export const NavLinkExample: VFC<ExampleComponentProps> = ({ boolValues }) => (
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
