import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { StoryTemplate } from "@fremtind/jkl-utils";
import { RadioButtonChoice } from ".";
import "@fremtind/jkl-radio-button/radio-button.css";

const choices = ["Yes", "No", "I don't know"];

const stories = storiesOf("Atom/Knapper", module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add("RadioButton", () => {
    const legendText = text("Legend text", "Do you like radio?");
    const selectedValue = select("Selected value", choices, choices[0]);
    return (
        <StoryTemplate
            title="RadioButton"
            tldr="Used to select one, and only one from a list of items"
            description="In radio context, no selection makes no sense."
        >
            <RadioButtonChoice
                legend={legendText}
                name="likesradiobuttons"
                choices={choices}
                selectedValue={selectedValue}
                onChange={action("clicked")}
            />
        </StoryTemplate>
    );
});
