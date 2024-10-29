import type { CodeExample } from "doc-utils";
import React, { type FC, useState } from "react";
import { useAutoAnimatedHeight } from "../src";
import "./animation-example.scss";

const content1 = (
    <>
        <p className="jkl-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </p>
    </>
);
const content2 = (
    <>
        <p className="jkl-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </p>
        <p className="jkl-body">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
        </p>
    </>
);
const content3 = (
    <>
        <p className="jkl-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </p>
        <p className="jkl-body">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
        </p>
        <p className="jkl-body">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
        </p>
    </>
);

const content4 = (
    <>
        <p className="jkl-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
        </p>
        <p className="jkl-body">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
        </p>
        <p className="jkl-body">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
        </p>
        <p className="jkl-body">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
        </p>
    </>
);

const contentBlocks = [content1, content2, content3, content4];

function randomContentBlock(except?: JSX.Element): JSX.Element {
    let content =
        contentBlocks[Math.floor(Math.random() * contentBlocks.length)];
    if (content === except) {
        content = randomContentBlock(except);
    }
    return content;
}

const AutoAnimationExample: FC = () => {
    const [content, setContent] = useState(randomContentBlock());
    const animationRef = useAutoAnimatedHeight(content);

    const changeContent = () => {
        setContent(randomContentBlock(content));
    };

    return (
        <section ref={animationRef} className="auto-animation-example">
            <p className="jkl-heading-2">Lorem Ipsum</p>
            {content}
            <button
                className="jkl-button jkl-button--secondary"
                data-density="compact"
                onClick={changeContent}
            >
                Endre innhold
            </button>
        </section>
    );
};

export default AutoAnimationExample;

export const autoAnimationExampleCode: CodeExample = `
const [content, setContent] = useState(randomContentBlock());
const animationRef = useAutoAnimatedHeight(content);

const changeContent = () => {
    setContent(randomContentBlock(content));
};

return (
    <section ref={animationRef} className="auto-animation-example">
        <p className="jkl-heading-2">Lorem Ipsum</p>
        {content}
        <button className="jkl-button jkl-button--secondary" data-density="compact" onClick={changeContent}>
            Endre innhold
        </button>
    </section>
);
`;
