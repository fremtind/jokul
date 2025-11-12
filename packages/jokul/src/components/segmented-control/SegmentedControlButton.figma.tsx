import { figma } from "@figma/code-connect";
import React from "react";
import { SegmentedControlButton } from "./SegmentedControlButton.js";

figma.connect(
    SegmentedControlButton,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=25659%3A7709",
    {
        imports: [
            'import { SegmentedControlButton } from "@fremtind/jokul/components/segmented-control";',
        ],
        props: {
            // These props were automatically mapped based on your linked code:
            separated: figma.enum("Position", {
                Separate: true,
            }),
            checked: figma.enum("State", { Selected: true }),
            children: figma.textContent("Label"),
            value: figma.textContent("Label"),
        },
        example: (props) => <SegmentedControlButton {...props} />,
    },
);
