import { figma } from "@figma/code-connect";
import { CardImage } from "./CardImage.js";

figma.connect(
    CardImage,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14660%3A368",
    {
        imports: [
            'import { CardImage } from "@fremtind/jokul/components/card";',
        ],
        props: {
            // These props were automatically mapped based on your linked code:
            placement: figma.enum("Placement", {
                Top: "top",
                Middle: "middle",
                Bottom: "bottom",
            }),
        },
        example: (props) => <CardImage {...props} />,
    },
);
