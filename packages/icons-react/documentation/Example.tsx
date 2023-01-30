import React from "react";
import { DevExample } from "../../../doc-utils";
import { AnimatedIconsExample, animatedIconsExampleCode, animatedIconsExampleKnobs } from "./AnimatedIconsExample";
import { IconsExample, iconsExampleCode, iconsExampleKnobs } from "./IconsExample";
import "../../core/core.scss";
import "../../expand-button/expand-button.scss";
import "../../icons/icons.scss";
import "../../text-input/text-input.scss";
import "../../button/button.scss";

export default function Example() {
    return (
        <>
            <div>
                <DevExample component={IconsExample} knobs={iconsExampleKnobs} codeExample={iconsExampleCode} />
            </div>
            <div>
                <DevExample
                    component={AnimatedIconsExample}
                    knobs={animatedIconsExampleKnobs}
                    codeExample={animatedIconsExampleCode}
                />
            </div>
        </>
    );
}
