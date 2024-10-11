import React from "react";
import { ArrowDownIcon } from "..";
import { DevExample } from "../../../../../../doc-utils";
import { AnimatedIconsExample, animatedIconsExampleKnobs } from "./AnimatedIconsExample";
import { IconsExample, iconsExampleKnobs } from "./IconsExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

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
