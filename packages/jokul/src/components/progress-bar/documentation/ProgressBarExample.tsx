import React, { FC, useState } from "react";
import { ProgressBar } from "..";
import { ExampleKnobsProps } from "../../../../../../utils/dev-example";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icon";
import { IconButton } from "../../icon-button";

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
                <IconButton onClick={() => setVal(val - 10 < 0 ? 0 : val - 10)}>
                    <ChevronLeftIcon />
                </IconButton>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={val}
                    onChange={(e) => setVal(parseInt(e.target.value, 10))}
                />
                <IconButton onClick={() => setVal(val + 10 > 100 ? 100 : val + 10)}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>
    );
};
