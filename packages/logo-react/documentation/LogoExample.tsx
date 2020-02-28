import React from "react";
import { Logo } from "../src";
import "@fremtind/jkl-logo/logo.css";

interface Props {
    boolValues: { [key: string]: boolean };
}

export const LogoExample = ({ boolValues }: Props) => (
    <Logo animated={boolValues["Animert"]} isSymbol={boolValues["Kun symbol"]} centered={boolValues["Sentrert"]} />
);
