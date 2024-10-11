import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { LoaderExample, knobs as loaderKnobs } from "./LoaderExample";
import { SkeletonLoaderExample, knobs as skeletonLoaderKnobs } from "./SkeletonLoaderExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";
import "./styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={LoaderExample} knobs={loaderKnobs} />
            <DevExample component={SkeletonLoaderExample} knobs={skeletonLoaderKnobs} />
        </>
    );
}
