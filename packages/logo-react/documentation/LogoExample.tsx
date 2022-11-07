import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "@fremtind/jkl-internal-doc-utils";
import React, { FC } from "react";
import { Logo } from "../src";
import "./LogoExample.scss";

export const logoExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Animert", "Kun symbol", "Sentrert"],
};

export const LogoExample: FC<ExampleComponentProps> = ({ boolValues }) => (
    <Logo
        className="logo-example"
        animated={boolValues?.["Animert"]}
        isSymbol={boolValues?.["Kun symbol"]}
        centered={boolValues?.["Sentrert"]}
    />
);

export const logoExampleCode: CodeExample = ({ boolValues }) => `
<Logo
    animated={${boolValues?.["Animert"]}}
    isSymbol={${boolValues?.["Kun symbol"]}}
    centered={${boolValues?.["Sentrert"]}}
/>
`;
