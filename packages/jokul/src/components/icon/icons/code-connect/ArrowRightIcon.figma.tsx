import { figma } from "@figma/code-connect";
import React from "react";
import { ArrowRightIcon } from "../ArrowRightIcon.jsx";

figma.connect(
    ArrowRightIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14618%3A10306",
    {
        imports: [
            'import { ArrowRightIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <ArrowRightIcon {...props} />,
    },
);
