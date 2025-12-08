import { figma } from "@figma/code-connect";
import { PenIcon } from "../PenIcon.jsx";

figma.connect(
    PenIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14606%3A9435",
    {
        imports: ['import { PenIcon } from "@fremtind/jokul/components/icon";'],
        props: {
            bold: figma.enum("Weight", {
                Bold: true,
            }),
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <PenIcon {...props} />,
    },
);
