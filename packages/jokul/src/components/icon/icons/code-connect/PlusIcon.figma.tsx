import { figma } from "@figma/code-connect";
import React from "react";
import { PlusIcon } from "../PlusIcon.jsx";

figma.connect(
    PlusIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14571%3A8298",
    {
        imports: [
            'import { PlusIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <PlusIcon {...props} />,
    },
);
