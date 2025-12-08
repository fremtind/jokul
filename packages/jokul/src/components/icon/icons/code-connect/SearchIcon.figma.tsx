import { figma } from "@figma/code-connect";
import { SearchIcon } from "../SearchIcon.jsx";

figma.connect(
    SearchIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14463%3A229",
    {
        imports: [
            'import { SearchIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <SearchIcon {...props} />,
    },
);
