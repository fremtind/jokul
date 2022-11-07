import React, { FC } from "react";
import { Link } from "../../src";
import { ExampleComponentProps, ExampleKnobsProps } from "../@fremtind/jkl-internal-doc-utils";

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
