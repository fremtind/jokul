import { figma } from "@figma/code-connect";
import { Card } from "./Card.js";

figma.connect(
    Card,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14660%3A328",
    {
        imports: ['import { Card } from "@fremtind/jokul/components/card";'],
        props: {
            // These props were automatically mapped based on your linked code:
            padding: figma.enum("Padding", {
                S: "s",
                M: "m",
                L: "l",
                XL: "xl",
            }),
            variant: figma.enum("Variant", {
                High: "high",
                Low: "low",
                Outlined: "outlined",
            }),
            children: figma.instance("Content"),
        },
        example: (props) => <Card {...props} />,
    },
);
