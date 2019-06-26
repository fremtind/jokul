import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { StoryTemplate } from "@fremtind/jkl-utils";
import { TextField } from ".";
import "@fremtind/jkl-text-field/text-field.css";

const stories = storiesOf("Atom/Form elements", module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add("TextField", () => {
    const labelText = text("Label text", "First name");
    const valueText = text("Value text", " ");
    const typeSelect = select("Type", ["text", "number", "tel", "password", "email"], "text");
    const invalid = boolean("Is invalid", false);

    return (
        <StoryTemplate
            title="TextField"
            tldr="Used to select one, and only one from a list of items"
            description="In radio context, no selection makes no sense."
        >
            <TextField
                label={labelText}
                value={valueText}
                onChange={action("input change")}
                type={typeSelect}
                isInvalid={invalid}
            />
        </StoryTemplate>
    );
});
