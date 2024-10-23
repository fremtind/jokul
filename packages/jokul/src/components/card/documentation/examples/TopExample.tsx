import { ExampleComponentProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { InfoBlock, NavCard } from "../../NavCard.js";
import { mixedPadding } from "./cardExampleProps.js";

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
