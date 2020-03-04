import React from "react";
import { Logo } from "../src";

interface Props {
    boolValues: { [key: string]: boolean };
}

export const LogoExample = ({ boolValues }: Props) => (
    <Logo animated={boolValues["Animert"]} isSymbol={boolValues["Kun symbol"]} centered={boolValues["Sentrert"]} />
);
