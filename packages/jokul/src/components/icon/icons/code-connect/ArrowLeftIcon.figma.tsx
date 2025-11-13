import { figma } from "@figma/code-connect";
import React from "react";
import { ArrowLeftIcon } from "../ArrowLeftIcon.jsx";

figma.connect(
    ArrowLeftIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15493%3A7164",
    {
        imports: [
            'import { ArrowLeftIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ArrowLeftIcon {...props} />,
    },
);
