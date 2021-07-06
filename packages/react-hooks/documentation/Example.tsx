import React from "react";

import AnimationExample from "./AnimationExample";
import MutationObserverExample from "./MutationObserverExample";
import ClickOutsideExample from "./ClickOutsideExample";
import FocusOutsideExample from "./FocusOutsideExample";
import KeyListenerExample from "./KeyListenerExample";
import IntersectionObserverExample from "./IntersectionObserverExample";
import ScreenExample from "./ScreenExample";
import ScrollIntoViewExample from "./ScrollIntoViewExample";

const Example = () => (
    <>
        <AnimationExample />
        <MutationObserverExample />
        <ClickOutsideExample />
        <FocusOutsideExample />
        <KeyListenerExample />
        <IntersectionObserverExample />
        <ScreenExample />
        <ScrollIntoViewExample />
    </>
);

export default Example;
