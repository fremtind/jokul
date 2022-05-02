import React from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { LogoStamp } from "../src";
import { logoStampTextPaths } from "../src/logoStampTextPaths";
import "./LogoExample.scss";

export const LogoStampExample = ({ boolValues, choiceValues }: ExampleComponentProps) => (
    <LogoStamp
        className="logo-example"
        animated={boolValues?.["Animert"]}
        variant={choiceValues?.["Variant"] as keyof typeof logoStampTextPaths}
    />
);

export const logoStampExampleCode: CodeExample = ({ boolValues, choiceValues }) => `
<LogoStamp
    animated={${boolValues?.["Animert"]}}
    variant="${choiceValues?.["Variant"]}"
/>`;

export const logoStampExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Animert"],
    choiceProps: [
        {
            name: "Variant",
            values: [
                "fraSB1ogDNB",
                "forsikringLevertAvFremtind",
                "vartForsikringsselskap",
                "innovasjonFraFremtind",
                "teknologiFraFremtind",
                "vartEgetForsikringsselskap",
            ],
            defaultValue: 0,
        },
    ],
};
