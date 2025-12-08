import { figma } from "@figma/code-connect";
import { Message } from "./Message.js";

figma.connect(
    Message,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14268%3A9812",
    {
        imports: [
            'import { InfoMessage } from "@fremtind/jokul/components/message";',
        ],
        props: {
            children: figma.string("Text"),
            dismissable: figma.boolean("Dismissable"),
            title: figma.boolean("Show Title", {
                true: figma.string("Title"),
                false: undefined,
            }),
            variant: figma.enum("Variant", {
                Error: "error",
                Warning: "warning",
                Success: "success",
                Info: "info",
            }),
        },
        example: ({ children, ...props }) => (
            <Message {...props}>{children}</Message>
        ),
    },
);
