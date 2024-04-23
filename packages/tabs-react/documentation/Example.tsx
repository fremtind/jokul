import React from "react";
import { DevExample } from "../../../doc-utils";
import { NavTabsExample, navTabsExampleCode, navTabsExampleKnobs } from "./NavTabsExample";
import { TabsExample, tabsExampleCode, tabsExampleKnobs } from "./TabsExample";
import "../../tabs/tabs.scss";

export default function Example() {
    return (
        <>
            <h2 className="jkl-heading-2">Tabs</h2>
            <DevExample component={TabsExample} knobs={tabsExampleKnobs} codeExample={tabsExampleCode} />
            <h2 className="jkl-heading-2">NavTabs</h2>
            <DevExample component={NavTabsExample} knobs={navTabsExampleKnobs} codeExample={navTabsExampleCode} />
        </>
    );
}
