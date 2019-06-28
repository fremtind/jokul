import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import { StoryTemplate } from "../../../StoryTemplate";
import { PrimaryButton, SecondaryButton } from ".";
import "@fremtind/jkl-button/button.css";

const stories = storiesOf("Atom/Knapper", module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add("Knapper", () => (
    <div style={{ margin: "24px", display: "flex", flexDirection: "column" }}>
        <h2>Grunnknaper i Jøkul</h2>
        <div>
            <PrimaryButton onClick={action("clicked")}>Hello Button</PrimaryButton>
        </div>
        <div>
            <SecondaryButton onClick={action("clicked")}>Hello Button</SecondaryButton>
        </div>
    </div>
));

stories.add("PrimaryButton", () => {
    const buttonText = text("Button text", "Hello Primary");
    return (
        <StoryTemplate
            title="PrimaryButton"
            tldr="Det skal bare være en PrimaryButton per side, den skal indikere hva vi mener er det neste naturlige steget for brukeren og skal ha en tydelig plass på siden"
            description="Som designer så syns jeg det er viktig at SecondaryButton ser bra ut."
        >
            <PrimaryButton onClick={action("clicked")}>{buttonText}</PrimaryButton>
        </StoryTemplate>
    );
});

stories.add("SecondaryButton", () => {
    const buttonText = text("Button text", "Hello Secondary");

    return (
        <StoryTemplate
            title="SecondaryButton"
            tldr="Secondary button står til primarybutton som det alternative valget. Dette vil ofte være det ikke ønskelige valget fra vår siden, feks å avbryte en flyt."
            description="Som designer så syns jeg det er viktig at SecondaryButton ser bra ut."
        >
            <SecondaryButton onClick={action("clicked")}>{buttonText}</SecondaryButton>
        </StoryTemplate>
    );
});
