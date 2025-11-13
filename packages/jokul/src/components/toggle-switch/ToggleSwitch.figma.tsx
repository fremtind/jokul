import { figma } from "@figma/code-connect";
import React from "react";
import { ToggleSwitch } from "./ToggleSwitch.js";

figma.connect(
    ToggleSwitch,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2007%3A18937",
    {
        imports: [
            'import { ToggleSwitch } from "@fremtind/jokul/components/toggle-switch";',
        ],
        props: {
            "aria-pressed": figma.boolean("Selected"),
            disabled: figma.boolean("Disabled"),
            name: figma.string("Label"),
            children: figma.string("Label"),
        },
        example: (props) => <ToggleSwitch {...props} />,
    },
);
