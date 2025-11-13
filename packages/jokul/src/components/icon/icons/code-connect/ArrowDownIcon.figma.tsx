import { figma } from "@figma/code-connect";
import React from "react";
import { ArrowDownIcon } from "../ArrowDownIcon.jsx";

figma.connect(
    ArrowDownIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15493%3A7173",
    {
        imports: [
            'import { ArrowDownIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ArrowDownIcon {...props} />,
    },
);
