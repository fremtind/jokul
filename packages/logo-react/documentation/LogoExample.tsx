import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Logo } from "../src";
import "./LogoExample.scss";

export const LogoExample: VFC<ExampleComponentProps> = ({ boolValues }) => (
    <Logo
        className="logo-example"
        animated={boolValues && boolValues["Animert"]}
        isSymbol={boolValues && boolValues["Kun symbol"]}
        centered={boolValues && boolValues["Sentrert"]}
        inverted={boolValues && boolValues["Invertert"]}
    />
);
