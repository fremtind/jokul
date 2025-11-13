import { figma } from "@figma/code-connect";
import React from "react";
import { RadioPanel } from "./RadioPanel.js";

figma.connect(
    RadioPanel,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15978%3A7446",
    {
        imports: [
            'import { RadioPanel } from "@fremtind/jokul/components/radio-panel";',
        ],
        props: {
            alwaysOpen: figma.boolean("Always Open"),
            label: figma.textContent("Label"),
            children: figma.boolean("Show Content", {
                false: <></>,
                true: figma.instance("↳ Content"),
            }),
            extraLabel: figma.boolean("Show Additional Content", {
                false: <></>,
                true: figma.instance("↳ Additional Content"),
            }),
            value: figma.textContent("Label"),
            checked: figma.enum("State", {
                Selected: true,
            }),
        },
        example: (props) => <RadioPanel {...props} />,
    },
);
