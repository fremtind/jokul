import React from "react";
import { LogoStampTechnology, LogoStampDistributor, LogoStampInnovation, LogoStampInsurance } from "../src";

export function LogoStampExample() {
    return (
        <div style={{ display: "flex", padding: "2.5rem" }}>
            <LogoStampDistributor />
            <LogoStampInnovation />
            <LogoStampInsurance />
            <LogoStampTechnology />
        </div>
    );
}
