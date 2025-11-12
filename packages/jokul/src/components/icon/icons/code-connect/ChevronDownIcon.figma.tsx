import { figma } from "@figma/code-connect";
import React from "react";
import { ChevronDownIcon } from "../ChevronDownIcon.jsx";

figma.connect(
    ChevronDownIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14607%3A10178",
    {
        imports: [
            'import { ChevronDownIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            bold: figma.enum("Weight", {
                Bold: true,
            }),
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <ChevronDownIcon {...props} />,
    },
);
