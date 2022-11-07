import React, { FC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { InfoBlock, NavCard } from "../src";
import { mixedPadding } from "./cardExampleProps";

export const TopExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const paddingChoice = (choiceValues?.["Padding"] as "m" | "l" | "xl" | "blandet") || "l";
    const padding = paddingChoice === "blandet" ? mixedPadding : paddingChoice;
    return (
        <>
            <p className="jkl-heading-1 jkl-spacing-xl--bottom">Åpne skadesaker</p>
            <div style={{ display: "flex", gap: "16px" }}>
                <NavCard
                    padding={padding}
                    href="#"
                    title="Knust skjerm"
                    tag={{ type: "warning", text: "Krever handling" }}
                >
                    <InfoBlock>Svar fra verksted</InfoBlock>
                </NavCard>
                <NavCard
                    padding={padding}
                    href="#"
                    title="Forsinket bagasje"
                    tag={{ type: "success", text: "Godkjent" }}
                />
            </div>
        </>
    );
};

export const topExampleCode: CodeExample = ({ choiceValues }) => {
    const paddingChoice = choiceValues?.["Padding"] || "l";
    const padding =
        paddingChoice === "blandet"
            ? `{{
            top: "2xl",
            right: "xl",
            bottom: "m",
            left: "l",
        }}`
            : `"${paddingChoice}"`;

    return `
<p className="jkl-heading-1 jkl-spacing-xl--bottom">Åpne skadesaker</p>
<div style={{ display: "flex", gap: "16px" }}>
    <NavCard
        padding={${padding}}
        href="#"
        title="Knust skjerm"
        tag={{ type: "warning", text: "Krever handling" }}
    >
        <InfoBlock>Svar fra verksted</InfoBlock>
    </NavCard>
    <NavCard
        padding={${padding}}
        href="#"
        title="Forsinket bagasje"
        tag={{ type: "success", text: "Godkjent" }}
    />
</div>`;
};
