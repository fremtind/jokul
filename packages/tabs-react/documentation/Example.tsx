import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { TabsExample, tabsExampleCode, tabsExampleKnobs } from "./TabsExample";
import "../../tabs/tabs.scss";

export default function Example() {
    return <DevExample component={TabsExample} knobs={tabsExampleKnobs} codeExample={tabsExampleCode} />;
}
