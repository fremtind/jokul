import React, { VFC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { LogoStamp } from "../src";
import "./LogoExample.scss";

export const LogoStampExample: VFC<ExampleComponentProps> = ({ boolValues }) => (
    <LogoStamp className="logo-example" animated={boolValues?.["Animert"]} />
);

export const logoStampExampleCode: CodeExample = ({ boolValues }) => `
<LogoStamp animated={${boolValues?.["Animert"]}} />
`;
