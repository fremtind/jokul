import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { ArrowDownIcon } from "../icons/ArrowDownIcon.js";
import {
    AnimatedIconsExample,
    animatedIconsExampleKnobs,
} from "./AnimatedIconsExample.js";
import { IconsExample, iconsExampleKnobs } from "./IconsExample.js";

export default function Example() {
    return (
        <>
            <div data-layout-density="compact">
                <h2 className="jkl-heading-2">
                    Heading{" "}
                    <ArrowDownIcon
                        style={{
                            display: "inline-block",
                            verticalAlign: "middle",
                        }}
                    />
                </h2>
            </div>
            <div>
                <DevExample
                    component={IconsExample}
                    knobs={iconsExampleKnobs}
                />
            </div>
            <div>
                <DevExample
                    component={AnimatedIconsExample}
                    knobs={animatedIconsExampleKnobs}
                />
            </div>
        </>
    );
}
