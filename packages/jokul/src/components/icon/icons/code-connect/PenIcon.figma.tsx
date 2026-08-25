import { figma } from "@figma/code-connect";
import React from "react";
import { PenIcon } from "../PenIcon.jsx";

figma.connect(
    PenIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14606%3A9435",
    {
        imports: ['import { PenIcon } from "@fremtind/jokul/components/icon";'],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <PenIcon {...props} />,
    },
);
