import { figma } from "@figma/code-connect";
import React from "react";
import { CheckIcon } from "../CheckIcon.jsx";

figma.connect(
    CheckIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14571%3A213",
    {
        imports: [
            'import { CheckIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <CheckIcon {...props} />,
    },
);
