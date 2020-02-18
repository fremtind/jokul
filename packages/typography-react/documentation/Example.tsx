import React from "react";
import { Label, SupportLabel, Link } from "../src";

import "@fremtind/jkl-core/core.min.css";

const Example = () => (
    <section className="jkl-spacing--top-3">
        <h2 className="jkl-heading-large jkl-spacing--bottom-1">Label</h2>
        <Label standAlone variant="small">
            Small
        </Label>
        <Label standAlone variant="medium">
            Medium
        </Label>
        <Label standAlone variant="large">
            Large
        </Label>
        <h2 className="jkl-heading-large jkl-spacing--bottom-1 jkl-spacing--top-3">SupportLabel</h2>
        <SupportLabel helpLabel="Hjelpetekst" />
        <SupportLabel errorLabel="Feilmelding" />
        <h2 className="jkl-heading-large jkl-spacing--bottom-1 jkl-spacing--top-3">Link</h2>
        <p className="jkl-body" style={{ padding: "1.5rem" }}>
            Lorem ipsum dolor sin amet <Link href="#">Link</Link> consectetur adipiscing elit
        </p>
        <p className="jkl-body" style={{ backgroundColor: "#181818", color: "#FFF", padding: "1.5rem" }}>
            Lorem ipsum dolor sin amet{" "}
            <Link negative href="#">
                Link
            </Link>{" "}
            consectetur adipiscing elit
        </p>
    </section>
);
export default Example;
