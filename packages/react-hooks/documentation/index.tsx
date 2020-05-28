import React from "react";
import ReactDOM from "react-dom";

// Import core styles, webfonts and tab listener (same for all components):
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.scss";
import "../../webfonts/documentation/internal.scss";

// Imports required for showing example (same for all components):
import { DevExample } from "@fremtind/jkl-portal-components";
import "@fremtind/jkl-portal-components/dev-example.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-button/button.min.css";
import "@fremtind/jkl-list/list.min.css";
import "@fremtind/jkl-card/card.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";

// Import actual example and component stylesheet (specific for this component):
import AnimationExample from "./AnimationExample";
import ClickOutsideExample from "./ClickOutsideExample";
import FocusOutsideExample from "./FocusOutsideExample";
import IntersectionObserverExample from "./IntersectionObserverExample";
import KeyListenerExample from "./KeyListenerExample";
import MutationObserverExample from "./MutationObserverExample";
import ScrollIntoViewExample from "./ScrollIntoViewExample";
import "@fremtind/jkl-datepicker/datepicker.css";

initTabListener();

const mountNode = document.getElementById("app");
ReactDOM.render(
    <>
        <DevExample component={AnimationExample} />
        <DevExample component={ClickOutsideExample} />
        <DevExample component={FocusOutsideExample} />
        <DevExample component={KeyListenerExample} />
        <DevExample component={MutationObserverExample} />
        <DevExample component={IntersectionObserverExample} />
        <DevExample component={ScrollIntoViewExample} />
    </>,
    mountNode,
);
