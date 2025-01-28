import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React from "react";
import { LogoStamp } from "../LogoStamp.js";
import * as logoStampTextPaths from "../text-paths/index.js";

export const LogoStampExample = ({
    boolValues,
    choiceValues,
}: ExampleComponentProps) => {
    const variant = choiceValues?.[
        "Variant"
    ] as keyof typeof logoStampTextPaths;
    // eslint-disable-next-line import/namespace
    const TextPath = logoStampTextPaths[variant];

    return (
        <LogoStamp
            className="logo-stamp-example"
            animated={boolValues?.["Animert"]}
            title={TextPath.displayName}
        >
            <TextPath />
        </LogoStamp>
    );
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
