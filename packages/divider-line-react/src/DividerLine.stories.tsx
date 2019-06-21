import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { StoryTemplate } from "@fremtind/jkl-utils";
import { DividerLine } from ".";
import "@fremtind/jkl-divider-line/divider-line.css";

const stories = storiesOf("Atom/Divider line", module);
stories.addDecorator(withInfo);

const DividerWithToggle = () => {
    const [show, setVisibility] = React.useState(true);
    return (
        <StoryTemplate
            title="DividerLine"
            tldr="Used to divide content on a page"
            description="Use with care, we do not want our page to be complicated and very compartmentalized."
        >
            {show && <DividerLine />}
            <div style={{ marginTop: "36px" }}>
                <button onClick={() => setVisibility(!show)}>Toggle divider line</button>
            </div>
        </StoryTemplate>
    );
};

stories.add("DividerLine", () => {
    return <DividerWithToggle />;
});
