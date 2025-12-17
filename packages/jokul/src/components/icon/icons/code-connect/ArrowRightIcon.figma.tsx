import { figma } from "@figma/code-connect";
import { ArrowRightIcon } from "../ArrowRightIcon.jsx";

figma.connect(
    ArrowRightIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14618%3A10306",
    {
        imports: [
            'import { ArrowRightIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ArrowRightIcon {...props} />,
    },
);
