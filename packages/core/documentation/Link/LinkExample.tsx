import React, { VFC } from "react";

import { ExampleComponentProps } from "../../../../doc-utils";
import { Link } from "../../src";

export const LinkExample: VFC<ExampleComponentProps> = ({ boolValues }) => (
    <p className={boolValues?.["Compact"] ? "jkl-small" : "jkl-body"}>
        <Link href="/" external={boolValues?.["Ekstern"]}>
            Gå til forsiden
        </Link>
    </p>
);

export const linkExampleCode = ({ boolValues }: ExampleComponentProps): string => `
<p className="${boolValues?.["Compact"] ? "jkl-small" : "jkl-body"}">
    <Link href="/" external={${boolValues?.["Ekstern"]}}>
        Gå til forsiden
    </Link>
</p>`;
