import { figma } from "@figma/code-connect";
import React from "react";
import { DragIcon } from "../DragIcon.jsx";

figma.connect(
    DragIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14471%3A131",
    {
        imports: [
            'import { DragIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <DragIcon {...props} />,
    },
);
