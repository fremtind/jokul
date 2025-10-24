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
            label: figma.textContent("Label"),
            value: figma.textContent("Label"),
            checked: figma.enum("State", {
                Selected: true,
            }),
            amount: figma.textContent("xxx kr/md."),
        },
        example: (props) => <RadioPanel {...props} />,
    },
);
