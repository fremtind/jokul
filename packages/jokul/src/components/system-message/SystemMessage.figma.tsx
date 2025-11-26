import { figma } from "@figma/code-connect";
import React from "react";
import { SystemMessage } from "./SystemMessage.js";

figma.connect(
    SystemMessage,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14268%3A9754",
    {
        imports: [
            'import { ErrorSystemMessage } from "@fremtind/jokul/components/system-message";',
        ],
        props: {
            children: figma.string("Text"),
            dismissable: figma.boolean("Dismissable"),
            variant: figma.enum("Variant", {
                Info: "info",
                Warning: "warning",
                Error: "error",
                Success: "success",
            }),
        },
        example: (props) => <SystemMessage {...props} />,
    },
);
