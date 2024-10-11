import React from "react";
import { ArrowDownIcon } from "..";
import { DevExample } from "../../../../../../utils/dev-example";
import { AnimatedIconsExample, animatedIconsExampleKnobs } from "./AnimatedIconsExample";
import { IconsExample, iconsExampleKnobs } from "./IconsExample";

export default function Example() {
    return (
        <>
            <div data-layout-density="compact">
                <h2 className="jkl-heading-2">
                    Heading <ArrowDownIcon style={{ display: "inline-block", verticalAlign: "middle" }} />
                </h2>
            </div>
            <div>
                <DevExample component={IconsExample} knobs={iconsExampleKnobs} />
            </div>
            <div>
                <DevExample component={AnimatedIconsExample} knobs={animatedIconsExampleKnobs} />
            </div>
        </>
    );
}
