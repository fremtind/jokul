import React from "react";
import { PopupTip } from "..";
import { formatValuta } from "../../../utilities/formatters";

export const knobs = [
    {
        type: "choice",
        label: "Plassering",
        choiceOptions: [
            { label: "Top", value: "top" },
            { label: "Top start", value: "top-start" },
            { label: "Top end", value: "top-end" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
        ],
        defaultValue: 0,
    },
    {
        type: "choice",
        label: "Forsinkelse (ms)",
        choiceOptions: [
            { label: "0", value: "0" },
            { label: "150", value: "150" },
            { label: "250", value: "250" },
            { label: "500", value: "500" },
            { label: "1000", value: "1000" },
        ],
        defaultValue: 0,
    },
];

export const PopupTipExample = () => {
    /* -- EXAMPLE CODE START -- */
    return (
        <p>
            Du betaler 348 kr/mnd{" "}
            <PopupTip
                placement={choiceKnob("Plassering")}
                delay={choiceKnob("Forsinkelse (ms)")}
                content={`Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er ${formatValuta(4176)}.`}
                triggerProps={{
                    onClick: () => console.log("PopupTip clicked"),
                }}
            />
        </p>
    );
    /* -- EXAMPLE CODE END -- */
};
