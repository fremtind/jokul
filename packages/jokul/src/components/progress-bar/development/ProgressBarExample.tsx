import type { ExampleKnobsProps } from "utils/dev-example/index.js";
import React, { type FC, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icon/index.js";
import { IconButton } from "../../icon-button/IconButton.js";
import { ProgressBar } from "../ProgressBar.js";

export const progressBarExampleKnobs: ExampleKnobsProps = {};

export const ProgressBarExample: FC = () => {
    const [val, setVal] = useState(50);

    return (
        <div style={{ width: "100%", minWidth: "240px" }}>
            <ProgressBar aria-valuenow={val} />
            <div
                className="jkl-spacing-l--top"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <IconButton
                    onClick={() => setVal(val - 10 < 0 ? 0 : val - 10)}
                    aria-label="Minsk verdi"
                >
                    <ChevronLeftIcon />
                </IconButton>
                <input
                    aria-label="Juster verdi"
                    type="range"
                    min="0"
                    max="100"
                    value={val}
                    onChange={(e) => setVal(Number.parseInt(e.target.value, 10))}
                />
                <IconButton
                    onClick={() => setVal(val + 10 > 100 ? 100 : val + 10)}
                    aria-label="Øk verdi"
                >
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>
    );
};
