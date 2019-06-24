import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { StoryTemplate } from "@fremtind/jkl-utils";

import { Accordion, AccordionItem } from ".";

const stories = storiesOf("Molekyl/Layout", module);
stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add("Accordion", () => {
    const expanded = boolean("startExpanded", true);
    const title = text("title", "This title is set below");
    return (
        <StoryTemplate
            title="Accordion"
            tldr="An accordion is used to show/hide segments of information."
            description="Takes AccordionItems as children. Each AccordionAitem has a title, and some content that is rendered inside a div."
        >
            <Accordion>
                <AccordionItem title="What hides here?">This hides here!</AccordionItem>
                <AccordionItem title={`I hide ${expanded ? "nothing" : "something"}…`} startExpanded={expanded}>
                    {`…because startExpanded is set to ${expanded}`}
                </AccordionItem>
                <AccordionItem title={title}>Some content</AccordionItem>
            </Accordion>
        </StoryTemplate>
    );
});
