import { DevExample } from "doc-utils/index.js";
import React from "react";
import { Tab } from "../../tabs/Tab.js";
import { TabList } from "../../tabs/TabList.js";
import { TabPanel } from "../../tabs/TabPanel.js";
import { Tabs } from "../../tabs/Tabs.js";
import {
    ControlledExample as CheckboxPanelControlledExample,
    knobs as checkboxPanelControlledKnobs,
} from "./checkbox-panel/ControlledExample.js";
import {
    UncontrolledExample as CheckboxPanelUncontrolledExample,
    knobs as checkboxPanelUncontrolledKnobs,
} from "./checkbox-panel/UncontrolledExample.js";
import {
    ControlledExample as RadioPanelControlledExample,
    knobs as radioPanelControlledKnobs,
} from "./radio-panel/ControlledExample.js";
import {
    UncontrolledExample as RadioPanelUncontrolledExample,
    knobs as radioPanelUncontrolledKnobs,
} from "./radio-panel/UncontrolledExample.js";

import "./styles.scss";

export default function Example() {
    return (
        <div style={{ margin: 40 }}>
            <Tabs>
                <TabList>
                    <Tab>RadioPanel</Tab>
                    <Tab>CheckPanel</Tab>
                </TabList>

                <TabPanel>
                    <div style={{ marginBlock: 20 }}>
                        <DevExample
                            title="Uncontrolled variant"
                            component={RadioPanelUncontrolledExample}
                            knobs={radioPanelUncontrolledKnobs}
                        />
                        <DevExample
                            title="Controlled variant"
                            component={RadioPanelControlledExample}
                            knobs={radioPanelControlledKnobs}
                        />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div style={{ marginBlock: 20 }}>
                        <DevExample
                            title="Uncontrolled variant"
                            component={CheckboxPanelUncontrolledExample}
                            knobs={checkboxPanelUncontrolledKnobs}
                        />
                        <DevExample
                            title="Controlled variant"
                            component={CheckboxPanelControlledExample}
                            knobs={checkboxPanelControlledKnobs}
                        />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}
