import React from "react";

import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Link } from "../../src";

export const LinkExample = ({ boolValues }: ExampleComponentProps) => (
    <p className="jkl-body">
        <Link href="/" external={boolValues && boolValues["Ekstern"]}>
            Gå til forsiden
        </Link>
    </p>
);
