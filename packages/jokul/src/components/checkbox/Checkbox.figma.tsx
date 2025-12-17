import { figma } from "@figma/code-connect";
import { Checkbox } from "./Checkbox.js";

figma.connect(
    Checkbox,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2006%3A3746",
    {
        imports: [
            'import { Checkbox } from "@fremtind/jokul/components/checkbox";',
        ],
        props: {
            name: figma.string("Label"),
            checked: figma.boolean("Selected"),
            children: figma.string("Label"),
            invalid: figma.boolean("Error"),
            indeterminate: figma.boolean("Indeterminate"),
        },
        example: (props) => <Checkbox value={props.children} {...props} />,
    },
);
