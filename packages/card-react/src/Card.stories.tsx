import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { StoryTemplate } from "@fremtind/jkl-utils";
import { Card } from ".";

const stories = storiesOf("Atom/Knapper", module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add("Card", () => {
    return (
        <StoryTemplate
            title="PrimaryButton"
            tldr="Det skal bare være en PrimaryButton per side, den skal indikere hva vi mener er det neste naturlige steget for brukeren og skal ha en tydelig plass på siden"
            description="Som designer så syns jeg det er viktig at SecondaryButton ser bra ut."
        >
            <Card>
                <h1 className="jkl-h3">Jøkul card</h1>
                <p className="jkl-p">This card has some children that are displayed</p>
            </Card>
        </StoryTemplate>
    );
});
