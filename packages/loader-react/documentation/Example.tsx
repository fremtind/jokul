import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    LoaderExample,
    loaderExampleCode,
    loaderExampleKnobs,
} from "./LoaderExample";
import {
    SkeletonLoaderExample,
    skeletonLoaderExampleCode,
    skeletonLoaderExampleKnobs,
} from "./SkeletonLoaderExample";
import "../../loader/skeleton-loader.scss";
import "../../loader/loader.scss";

export default function Example() {
    return (
        <>
            <DevExample
                component={LoaderExample}
                knobs={loaderExampleKnobs}
                codeExample={loaderExampleCode}
            />
            <DevExample
                component={SkeletonLoaderExample}
                knobs={skeletonLoaderExampleKnobs}
                codeExample={skeletonLoaderExampleCode}
            />
        </>
    );
}
