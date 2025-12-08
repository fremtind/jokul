import { figma } from "@figma/code-connect";
import { ErrorIcon } from "../ErrorIcon.jsx";

figma.connect(
    ErrorIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14579%3A146",
    {
        imports: [
            'import { ErrorIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ErrorIcon {...props} />,
    },
);
