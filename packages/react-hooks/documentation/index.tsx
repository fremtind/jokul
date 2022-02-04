import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import AnimationExample from "./AnimationExample";
import ClickOutsideExample from "./ClickOutsideExample";
import FocusOutsideExample from "./FocusOutsideExample";
import IntersectionObserverExample from "./IntersectionObserverExample";
import KeyListenerExample from "./KeyListenerExample";
import MutationObserverExample from "./MutationObserverExample";
import ScrollIntoViewExample from "./ScrollIntoViewExample";
import ReducedMotionExample from "./ReducedMotionExample";
import { UseIdExample } from "./UseIdExample";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-card/card.css";

renderExample(
    <>
        <DevExample component={AnimationExample} />
        <DevExample component={ClickOutsideExample} />
        <DevExample component={FocusOutsideExample} />
        <DevExample component={KeyListenerExample} />
        <DevExample component={MutationObserverExample} />
        <DevExample component={IntersectionObserverExample} />
        <DevExample component={ScrollIntoViewExample} />
        <DevExample component={ReducedMotionExample} />
        <DevExample component={UseIdExample} />
    </>,
    document.getElementById("app"),
);
