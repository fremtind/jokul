import { figma } from "@figma/code-connect";
import { CloseIcon } from "../CloseIcon.jsx";

figma.connect(
    CloseIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14571%3A9228",
    {
        imports: [
            'import { CloseIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <CloseIcon {...props} />,
    },
);
