import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { LoaderExample, knobs as loaderKnobs } from "./LoaderExample";
import { SkeletonLoaderExample, knobs as skeletonLoaderKnobs } from "./SkeletonLoaderExample";

import "./styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={LoaderExample} knobs={loaderKnobs} />
            <DevExample component={SkeletonLoaderExample} knobs={skeletonLoaderKnobs} />
        </>
    );
}
