import React from "react";
import { DevExample } from "../../../doc-utils";
import { NavTabsExample, navTabsExampleCode, navTabsExampleKnobs } from "./NavTabsExample";
import { TabsExample, tabsExampleCode, tabsExampleKnobs } from "./TabsExample";
import "../../tabs/tabs.scss";

export default function Example() {
    return (
        <>
            <DevExample component={TabsExample} knobs={tabsExampleKnobs} codeExample={tabsExampleCode} />
            <DevExample component={NavTabsExample} knobs={navTabsExampleKnobs} codeExample={navTabsExampleCode} />
        </>
    );
}
