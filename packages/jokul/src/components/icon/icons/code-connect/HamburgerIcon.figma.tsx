import { figma } from "@figma/code-connect";
import React from "react";
import { HamburgerIcon } from "../HamburgerIcon.jsx";

figma.connect(
    HamburgerIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14607%3A10210",
    {
        imports: [
            'import { HamburgerIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <HamburgerIcon {...props} />,
    },
);
