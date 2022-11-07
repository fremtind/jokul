import { ExampleComponentProps } from "@fremtind/jkl-internal-doc-utils";
import React, { FC } from "react";
import { ExpandButtonExample, expandButtonExampleCode } from "./ExpandButtonExample";
import { ExpandSectionExample, expandSectionExampleCode } from "./ExpandSectionExample";

export const expandExamplesProps = {
    choiceProps: [
        {
            name: "Innhold",
            values: ["Integrert", "Frittstående"],
            defaultValue: 0,
        },
        {
            name: "Ekspander i retning (kun frittstående)",
            values: ["Nedover", "Oppover"],
            defaultValue: 0,
        },
    ],
};

const ExpandExamples: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const frittstaende = choiceValues?.["Innhold"] === "Frittstående";
    let C = ExpandSectionExample;
    if (frittstaende) {
        C = ExpandButtonExample;
    }
    return <C boolValues={boolValues} choiceValues={choiceValues} />;
};

export default ExpandExamples;

export const expandExamplesCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => {
    const frittstaende = choiceValues?.["Innhold"] === "Frittstående";

    if (frittstaende) {
        if (typeof expandButtonExampleCode === "string") {
            return expandButtonExampleCode;
        }
        return expandButtonExampleCode({ boolValues, choiceValues });
    }

    if (typeof expandSectionExampleCode === "string") {
        return expandSectionExampleCode;
    }

    return expandSectionExampleCode({ boolValues, choiceValues });
};
