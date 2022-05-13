import React from "react";
import { DevExample } from "../../../doc-utils";
import { LoaderExample } from "./LoaderExample";
import { SkeletonLoaderExample } from "./SkeletonLoaderExample";
import "../../loader/skeleton-loader.scss";
import "../../loader/loader.scss";

export default function Example() {
    return (
        <>
            <DevExample component={LoaderExample} />
            <DevExample component={SkeletonLoaderExample} />
        </>
    );
}
