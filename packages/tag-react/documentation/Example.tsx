import React from "react";
import { DevExample } from "../../../doc-utils";
import { TagExample } from "./TagExample";
import "../../tag/tag.scss";

export default function Client() {
    return <DevExample title="Tag" component={TagExample} />;
}
