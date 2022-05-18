import React, { FC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { InfoBlock, NavCard } from "../src";

export const TopExample: FC<ExampleComponentProps> = () => {
    return (
        <>
            <p className="jkl-heading-1 jkl-spacing-xl--bottom">Åpne skadesaker</p>
            <div style={{ display: "flex", gap: "16px" }}>
                <NavCard href="#" title="Knust skjerm" tag={{ type: "warning", text: "Krever handling" }}>
                    <InfoBlock>Svar fra verksted</InfoBlock>
                </NavCard>
                <NavCard href="#" title="Forsinket bagasje" tag={{ type: "success", text: "Godkjent" }} />
            </div>
        </>
    );
};

export const topExampleCode = `
<p className="jkl-heading-1 jkl-spacing-xl--bottom">Åpne skadesaker</p>
<div style={{ display: "flex", gap: "16px" }}>
    <NavCard href="#" title="Knust skjerm" tag={{ type: "warning", text: "Krever handling" }}>
        <InfoBlock>Svar fra verksted</InfoBlock>
    </NavCard>
    <NavCard href="#" title="Forsinket bagasje" tag={{ type: "success", text: "Godkjent" }} />
</div>`;
