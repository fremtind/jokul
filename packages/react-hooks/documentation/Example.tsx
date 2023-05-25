import React from "react";
import { DevExample } from "../../../doc-utils";
import AnimationBetweenExample from "./AnimationBetweenExample";
import AnimationExample from "./AnimationExample";
import BrowserPreferencesExample from "./BrowserPreferencesExample";
import ClickOutsideExample from "./ClickOutsideExample";
import FocusOutsideExample from "./FocusOutsideExample";
import IntersectionObserverExample from "./IntersectionObserverExample";
import KeyListenerExample from "./KeyListenerExample";
import MutationObserverExample from "./MutationObserverExample";
import ScrollIntoViewExample from "./ScrollIntoViewExample";
import { UseIdExample } from "./UseIdExample";
import "../../button/button.scss";
import "../../card/card.scss";
import "./index.scss";

export default function Example() {
    return (
        <>
            <DevExample component={AnimationExample} />
            <DevExample component={AnimationBetweenExample} />
            <DevExample component={ClickOutsideExample} />
            <DevExample component={FocusOutsideExample} />
            <DevExample component={KeyListenerExample} />
            <DevExample component={MutationObserverExample} />
            <DevExample component={IntersectionObserverExample} />
            <DevExample component={ScrollIntoViewExample} />
            <DevExample component={UseIdExample} />
            <DevExample component={BrowserPreferencesExample} />
        </>
    );
}
