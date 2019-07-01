import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { StoryTemplate } from "@fremtind/jkl-utils";
import { BulletList, BulletListItem } from ".";
import "@fremtind/jkl-bullet-list/bullet-list.css";

const stories = storiesOf("Atom/Bullet list", module);
stories.addDecorator(withInfo);

stories.add("BulletList", () => {
    return (
        <StoryTemplate title="BulletList" tldr="Bullet point list" description="">
            <BulletList>
                <BulletListItem>Linnie Neal</BulletListItem>
                <BulletListItem>Rena Taylor</BulletListItem>
                <BulletListItem>
                    Garrett Mack
                    <BulletList>
                        <BulletListItem>Rebecca Robbins</BulletListItem>
                    </BulletList>
                </BulletListItem>
            </BulletList>
            <div style={{ margin: "20px" }} />
            <h2>With Lead styling</h2>
            <BulletList className="jkl-lead">
                <BulletListItem>Linnie Neal</BulletListItem>
                <BulletListItem>Rena Taylor</BulletListItem>
                <BulletListItem>
                    Garrett Mack
                    <BulletList className="jkl-lead">
                        <BulletListItem>Rebecca Robbins</BulletListItem>
                    </BulletList>
                </BulletListItem>
            </BulletList>
        </StoryTemplate>
    );
});
