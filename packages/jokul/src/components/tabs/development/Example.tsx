import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { NavTabsExample, navTabsExampleKnobs } from "./NavTabsExample.js";
import { TabsExample, tabsExampleKnobs } from "./TabsExample.js";

export default function Example() {
    return (
        <>
            <h2 className="jkl-heading-2">Tabs</h2>
            <DevExample component={TabsExample} knobs={tabsExampleKnobs} />
            <h2 className="jkl-heading-2">NavTabs</h2>
            <DevExample
                component={NavTabsExample}
                knobs={navTabsExampleKnobs}
            />
        </>
    );
}
