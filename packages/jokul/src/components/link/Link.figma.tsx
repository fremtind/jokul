import { figma } from "@figma/code-connect";
import { Link } from "./Link.js";

figma.connect(
    Link,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2006%3A2335",
    {
        imports: ['import { Link } from "@fremtind/jokul/components/link";'],
        props: {
            children: figma.string("Text"),
            external: figma.boolean("Show External Arrow"),
        },
        example: (props) => <Link {...props} />,
    },
);
