import { unicode } from "@fremtind/jkl-constants-util";
import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { InfoCard } from "../src/InfoCard";
import { mixedPadding } from "./cardExampleProps";
import "./info-card-example.scss";

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

export const infoCardExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const title = boolValues?.["Title"] ? "title=`Samle forsikringer –${unicode.nbsp}få${unicode.nbsp}rabatt`" : "";
    const paddingChoice = choiceValues?.["Padding"] || "l";
    const padding =
        paddingChoice === "blandet"
            ? `{{
        top: "64",
        right: "40",
        bottom: "16",
        left: "24",
    }}`
            : `"${paddingChoice}"`;

    return `<InfoCard
    padding=${padding}
    ${title}
>
    <p className="jkl-body">Har du tre eller flere forsikringer får du samlerabatt</p>
</InfoCard>`;
};
