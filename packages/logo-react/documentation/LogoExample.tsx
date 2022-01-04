import React, { VFC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { Logo } from "../src";
import "./LogoExample.scss";

export const LogoExample: VFC<ExampleComponentProps> = ({ boolValues }) => (
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
