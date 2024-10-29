import React, { FC, useState } from "react";
import { CodeExample } from "../../../doc-utils";
import { useAnimatedHeight } from "../src";
import "./index.scss";

const onTransitionStart = (isOpening: boolean) => {
    console.log(`transition started (${isOpening ? "opening" : "closing"})`);
};
const onTransitionEnd = (isOpen: boolean) => {
    console.log(`transition ended (${isOpen ? "open" : "closed"})`);
};

const AnimationExample: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen, {
        onTransitionStart,
        onTransitionEnd,
    });

    return (
        <section>
            <button
                className="jkl-button jkl-button--secondary"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                Animer {isOpen ? "ut" : "inn"}
            </button>
            <div ref={animationRef}>
                <div className="lorem-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci amet, aperiam asperiores aut beatae consequuntur
                    cumque delectus dolore doloremque ea fugit inventore ipsam
                    libero magnam officiis optio soluta veniam voluptatibus!
                </div>
            </div>
        </section>
    );
};

export default AnimationExample;

export const animationExampleCode: CodeExample = `
const [isOpen, setIsOpen] = useState(false);
const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen);

return (
    <section>
        <button className="jkl-button jkl-button--secondary" onClick={() => setIsOpen((isOpen) => !isOpen)}>
            Animate {isOpen ? "Out" : "In"}
        </button>
        <div ref={animationRef}>
            <div className="lorem-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut
                beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam
                officiis optio soluta veniam voluptatibus!
            </div>
        </div>
    </section>
);
`;
