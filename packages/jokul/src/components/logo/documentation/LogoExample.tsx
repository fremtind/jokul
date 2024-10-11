import React, { FC } from "react";
import { Logo } from "..";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../doc-utils";

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
