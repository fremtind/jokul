import React from "react";
import { DevExample } from "../../../doc-utils";
import FooterExample, { footerExampleKnobs } from "./FooterExample";
import "../../footer/footer.scss";

export default function Client() {
    return <DevExample component={FooterExample} knobs={footerExampleKnobs} />;
}
