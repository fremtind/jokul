import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../doc-utils";
import { Link } from "../../src";

export const linkExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Ekstern", "Compact"],
};

export const LinkExample: FC<ExampleComponentProps> = ({ boolValues }) => (
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
