import { figma } from "@figma/code-connect";
import React from "react";
import { Countdown } from "../countdown/Countdown.js";
import { ProgressBar } from "./ProgressBar.js";

figma.connect(
    ProgressBar,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=13371%3A2589",
    {
        imports: [
            'import { ProgressBar } from "@fremtind/jokul/components/progress-bar";',
        ],
        props: {
            variant: figma.enum("Animation", {
                None: "none",
                "Progress (left to right)": "progress",
                "Countdown (right to left)": "countdown",
            }),
        },
        example: (props) =>
            props.variant === "countdown" ? (
                <Countdown from={5000} />
            ) : (
                <ProgressBar aria-valuenow={60} />
            ),
    },
);
