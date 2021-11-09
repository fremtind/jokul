import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { IconsExample, choiceProps as iconsChoiceProps } from "./IconsExample";
import { AnimatedIconsExample, choiceProps as animatedIconsChoiceProps } from "./AnimatedIconsExample";
import "@fremtind/jkl-icons/animated-icons.css";
import "@fremtind/jkl-text-input/text-input.css";
import "@fremtind/jkl-button/button.css";

renderExample(
    <>
        <div>
            <DevExample
                component={IconsExample}
                knobs={{
                    choiceProps: iconsChoiceProps,
                }}
            />
        </div>
        <div>
            <DevExample
                component={AnimatedIconsExample}
                knobs={{
                    choiceProps: animatedIconsChoiceProps,
                }}
            />
        </div>
    </>,
    document.getElementById("app"),
);
