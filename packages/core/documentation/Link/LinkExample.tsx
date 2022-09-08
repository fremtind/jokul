import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../doc-utils";
import { Link } from "../../src";

export const linkExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Ekstern"],
};

export const LinkExample: FC<ExampleComponentProps> = ({ boolValues }) => (
    <p>
        <Link href="/" external={boolValues?.["Ekstern"]}>
            Gå til forsiden
        </Link>
    </p>
);

export const linkExampleCode = ({ boolValues }: ExampleComponentProps): string => `
<p>
    <Link href="/" external={${boolValues?.["Ekstern"]}}>
        Gå til forsiden
    </Link>
</p>`;
