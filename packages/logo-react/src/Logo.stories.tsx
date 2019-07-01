import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { LogoAnimated, LogoMain, LogoSymbol } from ".";
import { StoryTemplate } from "../../../StoryTemplate";
import "@fremtind/jkl-logo/logo.css";

const stories = storiesOf("Atom/Logo", module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add("LogoMain", () => {
    return (
        <>
            <StoryTemplate
                title="LogoMain"
                tldr="LogoMain is the normal fremtind logo with text."
                description="Shall never appear with the symbol."
            >
                <LogoMain />
            </StoryTemplate>
        </>
    );
});

stories.add("LogoSymbol", () => {
    return (
        <>
            <StoryTemplate
                title="LogoSymbol"
                tldr="LogoSymbol is the secondary fremtind logo without text."
                description="Shall never appear with the the main logo."
            >
                <LogoSymbol />
            </StoryTemplate>
        </>
    );
});

stories.add("LogoAnimated", () => {
    const centered = boolean("Centered", false);
    const showSymbol = boolean("Show symbol only", false);

    return (
        <>
            <StoryTemplate
                title="LogoAnimated"
                tldr="LogoAnimated is the secondary fremtind logo without text."
                description="Shall never appear with the the main logo."
            >
                <div style={{ width: "100%", overflow: "hidden" }}>
                    <LogoAnimated centered={centered} showSymbol={showSymbol} />
                </div>
            </StoryTemplate>
        </>
    );
});
