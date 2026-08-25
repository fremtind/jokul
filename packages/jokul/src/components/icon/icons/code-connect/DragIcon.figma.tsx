import { figma } from "@figma/code-connect";
import React from "react";
import { DragIcon } from "../DragIcon.jsx";

figma.connect(
    DragIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14471%3A131",
    {
        imports: [
            'import { DragIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <DragIcon {...props} />,
    },
);
