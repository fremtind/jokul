import React from "react";
import { DividerLine } from "../src";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-divider-line/divider-line.css";

const Example = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <p>DividerLine that animates when its scrolled into viewport</p>
        <DividerLine />
    </section>
);

export default Example;
