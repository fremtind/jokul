import { Tab, TabList, TabPanel, Tabs } from "@fremtind/jkl-tabs-react";
import React, { FC } from "react";
import { MainContent } from "../../layout/MainContent";

const Skjemadesign: FC = () => (
    <MainContent>
        <h1 className="jkl-title">Skjemadesign</h1>
        <Tabs>
            <TabList aria-label="Seksjoner">
                <Tab>Eksempler</Tab>
                <Tab>Kode</Tab>
                <Tab>Bruk</Tab>
                <Tab>Universell utforming</Tab>
                <Tab>Tekster</Tab>
                <Tab>Changelog</Tab>
            </TabList>

            <TabPanel>Hallo eksempler</TabPanel>
            <TabPanel>Hallo kode</TabPanel>
            <TabPanel>Hallo bruk</TabPanel>
            <TabPanel>Hallo UU</TabPanel>
            <TabPanel>Hallo tekster</TabPanel>
            <TabPanel>Hallo changelog</TabPanel>
        </Tabs>
    </MainContent>
);

export default Skjemadesign;
