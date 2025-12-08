import { figma } from "@figma/code-connect";
import { Logo } from "./Logo.js";

figma.connect(
    Logo,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=5255%3A279",
    {
        imports: ['import { Logo } from "@fremtind/jokul/components/logo";'],
        props: {},
        example: () => <Logo />,
    },
);

figma.connect(
    Logo,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=5255%3A284",
    {
        imports: ['import { Logo } from "@fremtind/jokul/components/logo";'],
        props: {},
        example: () => <Logo isSymbol />,
    },
);
