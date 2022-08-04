import React from "react";
import { DevExample } from "../../../doc-utils";
import { TabsExample, tabsExampleCode, tabsExampleKnobs } from "./TabsExample";
import "../../tabs/tabs.scss";

export default function Example() {
    return <DevExample component={TabsExample} knobs={tabsExampleKnobs} codeExample={tabsExampleCode} />;
}
