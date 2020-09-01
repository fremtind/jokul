import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Logo } from "../src";
import "./LogoExample.scss";

export const LogoExample = ({ boolValues }: ExampleComponentProps) => (
    <Logo
        className="logo-example"
        animated={boolValues && boolValues["Animert"]}
        isSymbol={boolValues && boolValues["Kun symbol"]}
        centered={boolValues && boolValues["Sentrert"]}
        inverted={boolValues && boolValues["Invertert"]}
    />
);
