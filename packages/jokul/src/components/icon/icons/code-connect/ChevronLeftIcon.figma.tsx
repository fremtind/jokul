import { figma } from "@figma/code-connect";
import React from "react";
import { ChevronLeftIcon } from "../ChevronLeftIcon.jsx";

figma.connect(
    ChevronLeftIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15493%3A7209",
    {
        imports: [
            'import { ChevronLeftIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ChevronLeftIcon {...props} />,
    },
);
