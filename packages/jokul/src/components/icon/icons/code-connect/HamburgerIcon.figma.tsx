import { figma } from "@figma/code-connect";
import { HamburgerIcon } from "../HamburgerIcon.jsx";

figma.connect(
    HamburgerIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14607%3A10210",
    {
        imports: [
            'import { HamburgerIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <HamburgerIcon {...props} />,
    },
);
