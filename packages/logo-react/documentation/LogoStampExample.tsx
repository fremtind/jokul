import React from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { LogoStamp } from "../src";
import * as logoStampTextPaths from "../src/text-paths";
import "./LogoExample.scss";

export const LogoStampExample = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const variant = choiceValues?.["Variant"] as keyof typeof logoStampTextPaths;
    // eslint-disable-next-line import/namespace
    const TextPath = logoStampTextPaths[variant];

    return (
        <LogoStamp className="logo-stamp-example" animated={boolValues?.["Animert"]} title={TextPath.displayName}>
            <TextPath />
        </LogoStamp>
    );
};

export const logoStampExampleCode: CodeExample = ({ boolValues, choiceValues }) => {
    const variant = choiceValues?.["Variant"] as keyof typeof logoStampTextPaths;

    return `
import { LogoStamp, ${variant} } from "@fremtind/jkl-logo-react";

<LogoStamp
    animated={${boolValues?.["Animert"]}}
    title={${variant}.displayName}
>
    <${variant} />
</LogoStamp>`;
};

export const logoStampExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Animert"],
    choiceProps: [
        {
            name: "Variant",
            values: [
                "FraSB1ogDNB",
                "ForsikringLevertAvFremtind",
                "VartForsikringsselskap",
                "InnovasjonFraFremtind",
                "TeknologiFraFremtind",
                "VartEgetForsikringsselskap",
            ],
            defaultValue: 0,
        },
    ],
};
