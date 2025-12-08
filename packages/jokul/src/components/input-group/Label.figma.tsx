import { figma } from "@figma/code-connect";
import { Label } from "./Label.js";

figma.connect(
    Label,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2007%3A8556",
    {
        imports: [
            'import { Label } from "@fremtind/jokul/components/input-group";',
        ],
        props: {
            children: figma.string("Text"),
            variant: figma.enum("Type", {
                Large: "large",
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <Label {...props} />,
    },
);
