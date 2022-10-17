import React, { FC } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { TabList, Tab, Tabs, TabPanel, useTabNavigation } from "../src";

export const tabNavigationExampleKnobs: ExampleKnobsProps = {};

export const TabNavigationExample: FC<ExampleComponentProps> = () => {
    const TAB_TITLES = ["Bedrifter", "Bedriftsansvarlige", "Rådgivere"];

    const { handleTabChange, navigatedTab } = useTabNavigation(TAB_TITLES, {
        urlParameter: "tab",
        navigateFunction: console.log,
    });

    return (
        <Tabs key={navigatedTab} defaultTab={navigatedTab} onChange={handleTabChange}>
            <TabList aria-label="tabs">
                {TAB_TITLES.map((tabTitle) => (
                    <Tab key={tabTitle}>{tabTitle}</Tab>
                ))}
            </TabList>
            <TabPanel>
                <div className="jkl-spacing-m--all">Innhold for Bedrifter</div>
            </TabPanel>
            <TabPanel>
                <div className="jkl-spacing-m--all">Innhold for Bedriftansvarlige</div>
            </TabPanel>
            <TabPanel>
                <div className="jkl-spacing-m--all">
                    Innhold for Rådgivere
                    <Tabs>
                        <TabList aria-label="subtabs">
                            <Tab>Bedrift AS</Tab>
                            <Tab>Alternativ AS</Tab>
                        </TabList>
                        <TabPanel className="jkl-spacing-m--all">Innhold for Bedrift AS</TabPanel>
                        <TabPanel className="jkl-spacing-m--all">Innhold for Alternativ AS</TabPanel>
                    </Tabs>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export const tabNavigationExampleCode: CodeExample = () => `
const TAB_TITLES = ["Bedrifter", "Bedriftsansvarlige", "Rådgivere"];

const { chosenTab, handleTabChange, navigatedTab } = useTabNavigation(TAB_TITLES, {
    urlParameter: "tab",
    navigateFunction: console.log,
});

return (
    <Tabs key={navigatedTab} defaultTab={chosenTab} onChange={handleTabChange}>
        <TabList aria-label="tabs">
            {TAB_TITLES.map((tabTitle) => (
                <Tab key={tabTitle}>{tabTitle}</Tab>
            ))}
        </TabList>
        <TabPanel>
            <div className="jkl-spacing-m--all">Innhold for Bedrifter</div>
        </TabPanel>
        <TabPanel>
            <div className="jkl-spacing-m--all">Innhold for Bedriftansvarlige</div>
        </TabPanel>
        <TabPanel>
            <div className="jkl-spacing-m--all">
                Innhold for Rådgivere
                <Tabs>
                    <TabList aria-label="subtabs">
                        <Tab>Bedrift AS</Tab>
                        <Tab>Alternativ AS</Tab>
                    </TabList>
                    <TabPanel className="jkl-spacing-m--all">Innhold for Bedrift AS</TabPanel>
                    <TabPanel className="jkl-spacing-m--all">Innhold for Alternativ AS</TabPanel>
                </Tabs>
            </div>
        </TabPanel>
    </Tabs>
)`;

export default TabNavigationExample;
