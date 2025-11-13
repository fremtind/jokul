import { figma } from "@figma/code-connect";
import React from "react";
import { Select } from "./Select.js";

figma.connect(
    Select,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15338%3A5628",
    {
        imports: [
            'import { Select } from "@fremtind/jokul/components/select";',
        ],
        props: {
            nested: figma.nestedProps("Label", {
                label: figma.string("Text"),
            }),
            invalid: figma.enum("State", { Error: true }),
        },
        example: ({ nested, ...props }) => (
            <Select
                label={nested.label}
                name={nested.label}
                {...props}
                items={["Dine", "valg", "her"]}
            />
        ),
    },
);
