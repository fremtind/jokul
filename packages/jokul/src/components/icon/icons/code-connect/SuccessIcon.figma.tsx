import { figma } from "@figma/code-connect";
import { SuccessIcon } from "../SuccessIcon.jsx";

figma.connect(
    SuccessIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14606%3A2522",
    {
        imports: [
            'import { SuccessIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <SuccessIcon {...props} />,
    },
);
