import { figma } from "@figma/code-connect";
import React from "react";
import { WarningIcon } from "../WarningIcon.jsx";

figma.connect(
    WarningIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14463%3A7735",
    {
        imports: [
            'import { WarningIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <WarningIcon {...props} />,
    },
);
