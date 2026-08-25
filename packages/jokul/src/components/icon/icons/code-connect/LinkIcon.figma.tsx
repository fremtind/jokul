import { figma } from "@figma/code-connect";
import React from "react";
import { LinkIcon } from "../LinkIcon.jsx";

figma.connect(
    LinkIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14471%3A130",
    {
        imports: [
            'import { LinkIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <LinkIcon {...props} />,
    },
);
