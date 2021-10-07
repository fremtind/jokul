import React, { VFC } from "react";

import { ExampleComponentProps } from "../../../../doc-utils";
import { Link } from "../../src";

export const LinkExample: VFC<ExampleComponentProps> = ({ boolValues }) => (
    <p className="jkl-body">
        <Link href="/" external={boolValues && boolValues["Ekstern"]} negative={boolValues && boolValues["Invertert"]}>
            Gå til forsiden
        </Link>
    </p>
);
