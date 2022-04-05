import React from "react";
import { DevExample } from "../../../doc-utils";
import { IconsExample, choiceProps as iconsChoiceProps } from "./IconsExample";
import { AnimatedIconsExample, choiceProps as animatedIconsChoiceProps } from "./AnimatedIconsExample";
import "../../icons/animated-icons.scss";
import "../../text-input/text-input.scss";
import "../../button/button.scss";

export default function Client() {
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
