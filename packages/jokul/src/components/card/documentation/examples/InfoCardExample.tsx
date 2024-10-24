import { ExampleComponentProps } from "doc-utils/index.js";
import React from "react";
import { unicode } from "../../../../utilities/constants/index.js";
import { InfoCard } from "../../InfoCard.js";
import { mixedPadding } from "./cardExampleProps.js";

export const InfoCardExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const title = boolValues?.["Title"] ? `Samle forsikringer –${unicode.nbsp}få${unicode.nbsp}rabatt` : undefined;
    const paddingChoice = (choiceValues?.["Padding"] as "0" | "16" | "24" | "40" | "blandet") || "24";
    const padding = paddingChoice === "blandet" ? mixedPadding : paddingChoice;

    return (
        <InfoCard title={title} padding={padding} className="example-info-card">
            <p className="jkl-body">Har du tre eller flere forsikringer får du samlerabatt</p>
        </InfoCard>
    );
};
