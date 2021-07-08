import React from "react";

import { ExampleComponentProps } from "../../../../doc-utils";
import { Link } from "../../src";

export const LinkExample = ({ boolValues }: ExampleComponentProps) => (
    <p className="jkl-body">
        <Link href="/" external={boolValues && boolValues["Ekstern"]} negative={boolValues && boolValues["Invertert"]}>
            Gå til forsiden
        </Link>
    </p>
);
