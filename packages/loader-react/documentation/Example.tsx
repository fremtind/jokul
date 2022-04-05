import React from "react";
import { DevExample } from "../../../doc-utils";
import { LoaderExample } from "./LoaderExample";
import "../../loader/loader.scss";

export default function Client() {
    return <DevExample component={LoaderExample} />;
}
