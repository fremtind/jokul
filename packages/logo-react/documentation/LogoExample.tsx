import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Logo } from "../src";

export const LogoExample = ({ boolValues }: ExampleComponentProps) => (
    <Logo
        animated={boolValues && boolValues["Animert"]}
        isSymbol={boolValues && boolValues["Kun symbol"]}
        centered={boolValues && boolValues["Sentrert"]}
    />
);
