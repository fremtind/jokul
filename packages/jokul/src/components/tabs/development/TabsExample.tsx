import type { FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { Tab, TabList, TabPanel, Tabs } from "../index.js";

export const tabsExampleKnobs: ExampleKnobsProps = {};

export const TabsExample: FC<ExampleComponentProps> = () => {
    return (
        <Tabs>
            <TabList aria-label="tabs">
                <Tab>Bedrifter</Tab>
                <Tab>Bedriftansvarlige</Tab>
                <Tab>Rådgivere</Tab>
            </TabList>
            <TabPanel>
                <div className="jkl-spacing-16--all">Innhold for Bedrifter</div>
            </TabPanel>
            <TabPanel>
                <div className="jkl-spacing-16--all">
                    Innhold for Bedriftansvarlige
                </div>
            </TabPanel>
            <TabPanel>
                <div className="jkl-spacing-16--all">
                    Innhold for Rådgivere
                    <Tabs>
                        <TabList aria-label="subtabs">
                            <Tab>Bedrift AS</Tab>
                            <Tab>Alternativ AS</Tab>
                        </TabList>
                        <TabPanel className="jkl-spacing-16--all">
                            Innhold for Bedrift AS
                        </TabPanel>
                        <TabPanel className="jkl-spacing-16--all">
                            Innhold for Alternativ AS
                        </TabPanel>
                    </Tabs>
                </div>
            </TabPanel>
        </Tabs>
    );
};
