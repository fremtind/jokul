import { figma } from "@figma/code-connect";
import { CheckboxPanel } from "./CheckboxPanel.js";

figma.connect(
    CheckboxPanel,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15978%3A22094",
    {
        imports: [
            'import { CheckboxPanel } from "@fremtind/jokul/components/checkbox-panel";',
        ],
        props: {
            alwaysOpen: figma.boolean("Always Open"),
            children: figma.enum("State", {
                Default: figma.boolean("Always Open", {
                    true: figma.instance("↳ Additional Content"),
                    false: undefined,
                }),
                Selected: figma.boolean("Show Additional Content", {
                    true: figma.instance("↳ Additional Content"),
                    false: undefined,
                }),
            }),
            checked: figma.enum("State", { Selected: true }),
            amount: figma.boolean("Show Content Header", {
                true: figma.instance("↳ Content"),
                false: undefined,
            }),
        },
        example: ({ children, ...props }) => (
            <CheckboxPanel label="Skriv noe her" {...props}>
                {children}
            </CheckboxPanel>
        ),
    },
);
