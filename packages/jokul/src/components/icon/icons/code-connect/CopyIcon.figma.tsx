import { figma } from "@figma/code-connect";
import React from "react";
import { CopyIcon } from "../CopyIcon.jsx";

figma.connect(
    CopyIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14607%3A10280",
    {
        imports: [
            'import { CopyIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <CopyIcon {...props} />,
    },
);
