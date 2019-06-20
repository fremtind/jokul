import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { StoryTemplate } from "@fremtind/jkl-utils";
import { Card } from ".";

const stories = storiesOf("Atom/Struktur", module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add("Card", () => {
    return (
        <StoryTemplate
            title="Card"
            tldr="Card kan brukes til å gruppere informasjon. Card kan inneholde flere underkomponenter."
            description="Som designer så syns jeg det er viktig at Card ser bra ut."
        >
            <Card>
                <h1 className="jkl-h3">Jøkul card</h1>
                <p className="jkl-p">This card has some children that are displayed</p>
            </Card>
        </StoryTemplate>
    );
});
