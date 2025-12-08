import { figma } from "@figma/code-connect";
import { DotsIcon } from "../DotsIcon.jsx";

figma.connect(
    DotsIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14606%3A9953",
    {
        imports: [
            'import { DotsIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            bold: figma.enum("Weight", {
                Bold: true,
            }),
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <DotsIcon {...props} />,
    },
);
