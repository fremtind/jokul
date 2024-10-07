import React from "react";
import { unicode } from "../../../../utilities";
import { InfoCard } from "../../InfoCard";

//import "./info-card-example.scss";

export const knobs = [
    {
        type: "bool",
        label: "Title",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "choice",
        label: "Padding",
        choiceOptions: ["0", "16", "24", "40", "blandet"],
        defaultValue: 2,
    },
];

export const InfoCardExample = () => {
    /* -- EXAMPLE CODE START -- */
    const title = boolKnob("Title") ? `Samle forsikringer –${unicode.nbsp}få${unicode.nbsp}rabatt` : undefined;
    const paddingChoice = choiceKnob("Padding") || "24";
    const padding =
        paddingChoice === "blandet"
            ? {
                  top: "64",
                  right: "40",
                  bottom: "16",
                  left: "24",
              }
            : paddingChoice;

    return (
        <div className="flex">
            <InfoCard title={title} padding={padding} className="example-info-card">
                <p className="jkl-body">Har du tre eller flere forsikringer får du samlerabatt</p>
            </InfoCard>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
