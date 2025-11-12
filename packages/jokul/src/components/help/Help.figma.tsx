import { figma } from "@figma/code-connect";
import React from "react";
import { BETA_Help } from "./Help.js";

figma.connect(
    BETA_Help,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=26847%3A10089",
    {
        imports: [
            'import { BETA_Help } from "@fremtind/jokul/components/help";',
        ],
        props: {
            nested: figma.nestedProps("Help Popover", {
                children: figma.string("Text"),
            }),
            buttonText: figma.textContent("Label"),
            iconPosition: figma.enum("Text", {
                None: "none",
                // Disse er omvendt siden man styrer tekst-
                // posisjon i Figma, men ikonposisjon i kode
                Left: "right",
                Right: "left",
            }),
        },
        example: (props) => {
            if (props.iconPosition === "none") {
                return (
                    <BETA_Help buttonText={props.buttonText}>
                        {props.nested.children}
                    </BETA_Help>
                );
            }

            return (
                <BETA_Help
                    buttonText={props.buttonText}
                    iconPosition={props.iconPosition}
                    showButtonText={true}
                >
                    {props.nested.children}
                </BETA_Help>
            );
        },
    },
);
