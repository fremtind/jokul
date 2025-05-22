import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { LoaderExample, knobs as loaderExampleKnobs } from "./LoaderExample.js";
import {
    SkeletonLoaderExample,
    knobs as skeletonLoaderExampleKnobs,
} from "./SkeletonLoaderExample.js";

import "./styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={LoaderExample} knobs={loaderExampleKnobs} />
            <DevExample
                component={SkeletonLoaderExample}
                knobs={skeletonLoaderExampleKnobs}
            />
        </>
    );
}
