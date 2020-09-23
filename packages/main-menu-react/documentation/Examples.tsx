import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { SecondaryButton } from "@fremtind/jkl-button-react";
import { MainMenu } from "../";

import "./Examples.scss";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    const showTopLevel = boolValues && boolValues["Vis toppnivå"];

    const menuItems = [
        { linkText: "Forsikringer", content: "/forsikringer" },
        { linkText: "Fakturaer", content: "/fakturaer" },
        { linkText: "Flere valg", content: [{ linkText: "Tilganger", content: "/tilganger" }] },
    ];
    const isActiveFunction = () => false;

    return (
        <div className="example-page">
            <div className="example-header">
                <MainMenu
                    items={menuItems}
                    showTopLevel={showTopLevel}
                    isActiveFunction={isActiveFunction}
                    navigationFunction={console.log}
                />
            </div>
        </div>
    );
};

export const ExtraElementsExample: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    const showTopLevel = boolValues && boolValues["Vis toppnivå"];

    const menuItems = [
        { linkText: "Forsikringer", content: "/forsikringer" },
        { linkText: "Fakturaer", content: "/fakturaer" },
    ];
    const isActiveFunction = () => false;

    return (
        <div className="example-page">
            <div className="example-header example-header--right-aligned">
                <MainMenu
                    items={menuItems}
                    showTopLevel={showTopLevel}
                    isActiveFunction={isActiveFunction}
                    navigationFunction={console.log}
                >
                    <SecondaryButton forceCompact>Logg ut</SecondaryButton>
                </MainMenu>
            </div>
        </div>
    );
};
