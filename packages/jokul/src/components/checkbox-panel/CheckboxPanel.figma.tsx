import { figma } from "@figma/code-connect";
import React from "react";
import { CheckboxPanel } from "./CheckboxPanel.js";

figma.connect(
    CheckboxPanel,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=28385%3A3692",
    {
        imports: [
            'import { CheckboxPanel } from "@fremtind/jokul/components/checkbox-panel";',
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
        example: ({ ...props }) => (
            <CheckboxPanel label="Skriv noe her" {...props} />
        ),
    },
);
