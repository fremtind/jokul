import { figma } from "@figma/code-connect";
import { ChevronRightIcon } from "../ChevronRightIcon.jsx";

figma.connect(
    ChevronRightIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15493%3A7208",
    {
        imports: [
            'import { ChevronRightIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ChevronRightIcon {...props} />,
    },
);
