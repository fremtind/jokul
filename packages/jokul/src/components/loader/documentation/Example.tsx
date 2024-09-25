import React from "react";
import { formatCode, InteractiveCode, useInteractiveCodeControls } from "../../../../../../utils/interactive-code";
// @ts-ignore
import { knobs as loaderKnobs } from "./LoaderExample";
// @ts-ignore
import LoaderExample from "./LoaderExample?raw";
// @ts-ignore
import { knobs as skeletonKnobs } from "./SkeletonLoaderExample";
// @ts-ignore
import SkeletonLoaderExample from "./SkeletonLoaderExample?raw";

import "../styles/loader.scss";
import "../styles/skeleton-loader.scss";

const loaderCode = formatCode(LoaderExample);
const skeletonLoaderCode = formatCode(SkeletonLoaderExample);

export default function Example() {
    const loaderControls = useInteractiveCodeControls(loaderCode, loaderKnobs);
    const skeletonControls = useInteractiveCodeControls(skeletonLoaderCode, skeletonKnobs);

    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Loader"}
                defaultCode={loaderCode}
                defaultShowEditor={true}
                noInline={true}
                controls={loaderControls}
            />
            <InteractiveCode
                title={"SkeletonLoader"}
                defaultCode={skeletonLoaderCode}
                defaultShowEditor={true}
                noInline={true}
                controls={skeletonControls}
            />
        </div>
    );
}
