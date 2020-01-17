import React, { useState } from "react";
import { useAnimatedHeight } from "../src";
import "./index.scss";

const AnimationExample = () => {
    const [isOpen, setIsOpen] = useState();
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen);
    return (
        <section className="jkl-spacing--top-3 jkl-spacing--bottom-3 hooks-example">
            <button className="jkl-button jkl-button--primary" onClick={() => setIsOpen(!isOpen)}>
                Animate {isOpen ? "Out" : "In"}
            </button>
            <div className={`lorem-text-wrapper ${isOpen ? "" : "lorem-text-wrapper--hidden"}`} ref={animationRef}>
                <div className={`lorem-text`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut
                    beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam
                    officiis optio soluta veniam voluptatibus!
                </div>
            </div>
        </section>
    );
};

export default AnimationExample;
