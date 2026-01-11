import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { Button } from "../../components/button/Button.jsx";
import type { UseAnimatedHeightOptions } from "../useAnimatedHeight/types.js";
import { useAnimatedHeight } from "../useAnimatedHeight/useAnimatedHeight.js";
import { useAnimatedHeightBetween } from "../useAnimatedHeight/useAnimatedHeightBetween.js";
import { useAutoAnimatedHeight } from "../useAnimatedHeight/useAutoAnimateHeight.js";

import "../../components/button/styles/_index.scss";
import "./styles.scss";
import { randomContentBlock } from "./content.jsx";

const meta = {
    title: "Hooks/Animasjon av høyde",
    component: () => null, // Vi har ingen faktisk komponent å vise
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<UseAnimatedHeightOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

const onTransitionStart = (isOpening: boolean) => {
    console.log(`transition started (${isOpening ? "opening" : "closing"})`);
};
const onTransitionEnd = (isOpen: boolean) => {
    console.log(`transition ended (${isOpen ? "open" : "closed"})`);
};

export const UseAnimatedHeight: Story = {
    name: "useAnimatedHeight",
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen, {
            onTransitionStart,
            onTransitionEnd,
        });

        return (
            <section>
                <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>
                    Animer {isOpen ? "ut" : "inn"}
                </Button>
                <div ref={animationRef}>
                    <div className="lorem-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci amet, aperiam asperiores aut beatae
                        consequuntur cumque delectus dolore doloremque ea fugit
                        inventore ipsam libero magnam officiis optio soluta
                        veniam voluptatibus!
                    </div>
                </div>
            </section>
        );
    },
};

export const UseAnimatedHeightBetween: Story = {
    name: "useAnimatedHeightBetween",
    render: () => {
        const [isExpanded, setIsExpanded] = useState(false);
        const [animationRef] = useAnimatedHeightBetween(isExpanded, {
            timing: "expressive",
        });

        return (
            <section ref={animationRef} className="animation-between-example">
                <p className="jkl-heading-2">Lorem Ipsum</p>
                <p className="jkl-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <p className="jkl-body">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                </p>
                <p className="jkl-body">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
                <Button
                    onClick={() => setIsExpanded((prev) => !prev)}
                >{`Vis ${isExpanded ? "mindre" : "mer"}`}</Button>
            </section>
        );
    },
};

export const UseAutoAnimatedHeight: Story = {
    name: "useAutoAnimatedHeight",
    render: () => {
        const [content, setContent] = useState(randomContentBlock());
        const animationRef = useAutoAnimatedHeight(content);

        const changeContent = () => {
            setContent(randomContentBlock(content));
        };

        return (
            <section ref={animationRef} className="auto-animation-example">
                <p className="jkl-heading-2">Lorem Ipsum</p>
                {content}
                <Button onClick={changeContent}>Endre innhold</Button>
            </section>
        );
    },
};
