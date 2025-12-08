import { figma } from "@figma/code-connect";
import { Button } from "./Button.js";

figma.connect(
    Button,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15479%3A1381",
    {
        imports: [
            'import { Button } from "@fremtind/jokul/components/button";',
        ],
        props: {
            variant: figma.enum("Variant", {
                Primary: "primary",
                Secondary: "secondary",
                Ghost: "ghost",
            }),
            children: figma.string("Label"),
            icon: figma.enum("Icon placement", {
                Left: figma.instance("↳ Icon"),
                Right: figma.instance("↳ Icon"),
            }),
            loader: figma.boolean("Loading", {
                false: undefined,
                true: {
                    showLoader: true,
                    textDescription: "Laster inn...",
                },
            }),
            iconPlacement: figma.enum("Icon placement", {
                "No icon": undefined,
                "Icon only": undefined,
                Left: "left",
                Right: "right",
            }),
        },
        example: ({ children, ...props }) => (
            <Button {...props}>{children}</Button>
        ),
    },
);
