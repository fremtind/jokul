import { figma } from "@figma/code-connect";
import React from "react";
import { RadioButton } from "./RadioButton.js";

figma.connect(
    RadioButton,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2007%3A9587",
    {
        imports: [
            'import { RadioButton } from "@fremtind/jokul/components/radio-button";',
        ],
        props: {
            children: figma.string("Label"),
            value: figma.string("Label"),
            checked: figma.boolean("Selected"),
            "aria-invalid": figma.boolean("Error"),
        },
        example: (props) => <RadioButton name="delt navn" {...props} />,
    },
);
