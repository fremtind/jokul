import React, { FC, useState } from "react";
import { CodeExample, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton, TertiaryButton } from "../../button-react/src";
import { Countdown } from "../src";

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
                <PrimaryButton onClick={() => setIsPaused(!isPaused)}>{isPaused ? "Start" : "Pause"}</PrimaryButton>
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

export const countdownExampleCode: CodeExample = () => `
<Countdown from={5000} isPaused={isPaused} />
`;
