import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { NavTabsExample, navTabsExampleKnobs } from "./NavTabsExample";
import { TabsExample, tabsExampleKnobs } from "./TabsExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return (
        <>
            <h2 className="jkl-heading-2">Tabs</h2>
            <DevExample component={TabsExample} knobs={tabsExampleKnobs} />
            <h2 className="jkl-heading-2">NavTabs</h2>
            <DevExample component={NavTabsExample} knobs={navTabsExampleKnobs} />
        </>
    );
}
