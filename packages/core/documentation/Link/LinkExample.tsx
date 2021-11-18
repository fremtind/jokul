import React, { VFC } from "react";

import { ExampleComponentProps } from "../../../../doc-utils";
import { Link } from "../../src";

export const LinkExample: VFC<ExampleComponentProps> = ({ boolValues }) => (
    <p className="jkl-body">
        <Link href="/" external={boolValues?.["Ekstern"]} negative={boolValues?.["Invertert"]}>
            Gå til forsiden
        </Link>
    </p>
);

export const linkExampleCode = ({ boolValues }: ExampleComponentProps): string => `
<p className="jkl-body">
    {/* NB: negative er deprecated */}
    <Link href="/" external={${boolValues?.["Ekstern"]}} negative={${boolValues?.["Invertert"]}}>
        Gå til forsiden
    </Link>
</p>`;
