import { figma } from "@figma/code-connect";
import { Chip } from "./Chip.js";

figma.connect(
    Chip,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=17770%3A1129",
    {
        imports: ['import { Chip } from "@fremtind/jokul/components/chip";'],
        variant: { Variant: "Filter" },
        props: {
            size: figma.enum("Size", {
                Small: "small",
                Large: "large",
            }),
            children: figma.string("Text"),
            selected: figma.enum("Variant", {
                "Filter Selected": true,
            }),
        },
        example: (props) => <Chip variant="filter" {...props} />,
    },
);

figma.connect(
    Chip,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=17770%3A1129",
    {
        imports: ['import { Chip } from "@fremtind/jokul/components/chip";'],
        props: {
            size: figma.enum("Size", {
                Small: "small",
                Large: "large",
            }),
            children: figma.string("Text"),
        },
        example: (props) => <Chip variant="input" {...props} />,
    },
);
