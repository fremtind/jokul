import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { StoryTemplate } from "@fremtind/jkl-utils";
import { Ul, Li } from ".";
import "@fremtind/jkl-bullet-list/bullet-list.css";

const stories = storiesOf("Atom/Bullet list", module);
stories.addDecorator(withInfo);

stories.add("BulletList", () => {
    return (
        <StoryTemplate title="BulletList" tldr="Bullet point list" description="">
            <Ul>
                <Li>Linnie Neal</Li>
                <Li>Rena Taylor</Li>
                <Li>Garrett Mack</Li>
                <Li nested>Rebecca Robbins</Li>
            </Ul>
            <div style={{ margin: "20px" }} />
            <h2>With Lead styling</h2>
            <Ul lead>
                <Li>Linnie Neal</Li>
                <Li>Rena Taylor</Li>
                <Li>Garrett Mack</Li>
                <Li nested>Rebecca Robbins</Li>
            </Ul>
        </StoryTemplate>
    );
});
