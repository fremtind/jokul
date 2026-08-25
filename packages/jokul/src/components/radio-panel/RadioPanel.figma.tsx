import { figma } from "@figma/code-connect";
import React from "react";
import { RadioPanel } from "./RadioPanel.js";

figma.connect(
    RadioPanel,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=28385%3A1082",
    {
        imports: [
            'import { RadioPanel } from "@fremtind/jokul/components/radio-panel";',
        ],
        props: {
            description: figma.enum("Description", {
                True: figma.string("Description text"),
                False: undefined,
            }),
            checked: figma.enum("State", { Selected: true }),
            amount: figma.boolean("Show Amount", {
                true: figma.string("Amount"),
                false: undefined,
            }),
        },
        example: (props) => <RadioPanel label="Skriv noe her" {...props} />,
    },
);
