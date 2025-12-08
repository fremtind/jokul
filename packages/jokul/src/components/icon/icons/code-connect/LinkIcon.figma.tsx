import { figma } from "@figma/code-connect";
import { LinkIcon } from "../LinkIcon.jsx";

figma.connect(
    LinkIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14471%3A130",
    {
        imports: [
            'import { LinkIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <LinkIcon {...props} />,
    },
);
