import React from "react";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-core/core.min.css";
import AnimationExample from "./AnimationExample";
import ClickOutsideExample from "./ClickOutsideExample";
import MutationObserverExample from "./MutationObserverExample";
import IntersectionObserverExample from "./IntersectionObserverExample";

const Example = () => (
    <>
        <AnimationExample />
        <ClickOutsideExample />
        <MutationObserverExample />
        <IntersectionObserverExample />
    </>
);

export default Example;
