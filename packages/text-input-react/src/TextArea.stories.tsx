import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { StoryTemplate } from "../../../StoryTemplate";
import { TextArea } from ".";
import "@fremtind/jkl-text-input/text-input.css";

const stories = storiesOf("Atom/Form elements", module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add("TextArea", () => {
    const labelText = text("Label text", "First name");
    const valueText = text("Value text", " ");
    const invalid = boolean("Is invalid", false);

    return (
        <StoryTemplate
            title="TextArea"
            tldr="Used to select one, and only one from a list of items"
            description="In radio context, no selection makes no sense."
        >
            <TextArea label={labelText} value={valueText} onChange={action("input change")} isInvalid={invalid} />
        </StoryTemplate>
    );
});
