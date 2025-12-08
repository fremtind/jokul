import { figma } from "@figma/code-connect";
import { TextArea } from "./TextArea.js";

figma.connect(
    TextArea,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2007%3A2473",
    {
        imports: [
            'import { TextArea } from "@fremtind/jokul/components/text-area";',
        ],
        props: {
            value: figma.string("Text"),
            nested: figma.nestedProps("Label", {
                label: figma.string("Text"),
            }),
            counter: figma.boolean("Show Counter", {
                true: { maxLength: 250 },
                false: undefined,
            }),
        },
        example: ({ nested, ...props }) => (
            <TextArea label={nested.label} {...props} />
        ),
    },
);
