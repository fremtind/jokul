import React from "react";
import { DevExample } from "../../../doc-utils";
import { AnimatedIconsExample, choiceProps as animatedIconsChoiceProps } from "./AnimatedIconsExample";
import { IconsExample, choiceProps as iconsChoiceProps } from "./IconsExample";
import "../../icons/animated-icons.scss";
import "../../text-input/text-input.scss";
import "../../button/button.scss";

export default function Example() {
    return (
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
        </>
    );
}
