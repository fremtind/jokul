import React from "react";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-card/card.css";
import "@fremtind/jkl-core/core.min.css";
import AnimationExample from "./AnimationExample";
import MutationObserverExample from "./MutationObserverExample";
import ClickOutsideExample from "./ClickOutsideExample";
import FocusOutsideExample from "./FocusOutsideExample";
import KeyListenerExample from "./KeyListenerExample";
import IntersectionObserverExample from "./IntersectionObserverExample";
import ScreenExample from "./ScreenExample";

const Example = () => (
    <>
        <AnimationExample />
        <MutationObserverExample />
        <ClickOutsideExample />
        <FocusOutsideExample />
        <KeyListenerExample />
        <IntersectionObserverExample />
        <ScreenExample />
    </>
);

export default Example;
