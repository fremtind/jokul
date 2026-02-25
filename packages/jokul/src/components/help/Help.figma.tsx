import { figma } from "@figma/code-connect";
import React from "react";
import { Help } from "./Help.js";

figma.connect(
    Help,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=26847%3A10089",
    {
        imports: ['import { Help } from "@fremtind/jokul/components/help";'],
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
                    <Help buttonText={props.buttonText}>
                        {props.nested.children}
                    </Help>
                );
            }

            return (
                <Help
                    buttonText={props.buttonText}
                    iconPosition={props.iconPosition}
                    showButtonText={true}
                >
                    {props.nested.children}
                </Help>
            );
        },
    },
);
