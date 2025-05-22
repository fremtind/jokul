import React, { type FC, useState } from "react";
import type { ExampleKnobsProps } from "utils/dev-example/index.js";
import { PrimaryButton, TertiaryButton } from "../../button/index.js";
import { Countdown } from "../Countdown.js";

export const countdownExampleKnobs: ExampleKnobsProps = {};

export const CountdownExample: FC = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [key, setKey] = useState(String(Date.now()));

    return (
        <div style={{ width: "100%", minWidth: "240px" }}>
            <Countdown key={key} from={5000} isPaused={isPaused} />
            <div
                className="jkl-spacing-l--top"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                }}
            >
                <PrimaryButton onClick={() => setIsPaused(!isPaused)}>
                    {isPaused ? "Start" : "Pause"}
                </PrimaryButton>
                <TertiaryButton
                    onClick={() => {
                        setIsPaused(true);
                        setKey(String(Date.now()));
                    }}
                >
                    Reset
                </TertiaryButton>
            </div>
        </div>
    );
};
