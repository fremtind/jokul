import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { Header } from ".";
import { StoryTemplate } from "@fremtind/jkl-utils";
import "../build/css/styles.css";

const stories = storiesOf("Molekyl/Header", module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add("Header", () => {
    const withAnimation = boolean("Show animation", true);
    const startText = text("Start", "Overskrift");
    const centerText = text("Center", "Innhold i midten");
    const endText = text("End", "Hovedmeny");

    return (
        <>
            <div style={{ marginTop: "150px" }} />
            <StoryTemplate
                title="Header"
                tldr="Header is important, more documentation if you scroll a bit"
                description="Yes, very"
            >
                <Header
                    withAnimation={withAnimation}
                    start={<p>{startText}</p>}
                    center={<p>{centerText}</p>}
                    end={<p>{endText}</p>}
                />
                <div style={{ height: "120vh" }} />
            </StoryTemplate>
        </>
    );
});
