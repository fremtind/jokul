import React, { FC } from "react";
import { Loader } from "..";
import "./styles.scss";

export const knobs = [
    {
        type: "choice",
        label: "Variant",
        choiceOptions: [
            { label: "Large", value: "large" },
            { label: "Medium", value: "medium" },
            { label: "Small", value: "small" },
        ],
        defaultValue: 0,
    },
];

export const LoaderExample = () => {
    /* -- EXAMPLE CODE START -- */
    return (
        <div className="jkl-loader-example">
            <div>
                <Loader variant={choiceKnob("Variant")} textDescription="Laster innhold" />
            </div>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
