import { figma } from "@figma/code-connect";
import React from "react";
import { NavLink } from "./NavLink.js";

figma.connect(
    NavLink,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=13893%3A14591",
    {
        imports: [
            'import { NavLink } from "@fremtind/jokul/components/nav-link";',
        ],
        props: {
            active: figma.boolean("Active"),
            back: figma.boolean("Back"),
            children: figma.string("Text"),
        },
        example: (props) => <NavLink {...props} />,
    },
);
