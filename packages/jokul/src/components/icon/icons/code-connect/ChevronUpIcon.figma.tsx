import { figma } from "@figma/code-connect";
import { ChevronUpIcon } from "../ChevronUpIcon.jsx";

figma.connect(
    ChevronUpIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15493%3A7207",
    {
        imports: [
            'import { ChevronUpIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ChevronUpIcon {...props} />,
    },
);
