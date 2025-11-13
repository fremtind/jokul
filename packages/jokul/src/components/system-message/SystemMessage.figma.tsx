import { figma } from "@figma/code-connect";
import React from "react";
import {
    ErrorSystemMessage,
    InfoSystemMessage,
    WarningSystemMessage,
} from "./SystemMessage.js";

figma.connect(
    ErrorSystemMessage,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14268%3A9754",
    {
        imports: [
            'import { ErrorSystemMessage } from "@fremtind/jokul/components/system-message";',
        ],
        variant: { Type: "Error" },
        props: {
            children: figma.string("Text"),
            dismissable: figma.boolean("Dismissable"),
        },
        example: (props) => <ErrorSystemMessage {...props} />,
    },
);

figma.connect(
    InfoSystemMessage,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14268%3A9754",
    {
        imports: [
            'import { InfoSystemMessage } from "@fremtind/jokul/components/system-message";',
        ],
        variant: { Type: "Info" },
        props: {
            children: figma.string("Text"),
            dismissable: figma.boolean("Dismissable"),
        },
        example: (props) => <InfoSystemMessage {...props} />,
    },
);

figma.connect(
    WarningSystemMessage,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14268%3A9754",
    {
        imports: [
            'import { WarningSystemMessage } from "@fremtind/jokul/components/system-message";',
        ],
        variant: { Type: "Warning" },
        props: {
            children: figma.string("Text"),
            dismissable: figma.boolean("Dismissable"),
        },
        example: (props) => <WarningSystemMessage {...props} />,
    },
);
