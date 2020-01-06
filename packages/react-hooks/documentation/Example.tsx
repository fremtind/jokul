import React, { useState } from "react";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-core/core.min.css";
import "./index.scss";
import { useAnimatedHeight } from "../src";

const Example = () => {
    const [isOpen, setIsOpen] = useState();
    const [ref] = useAnimatedHeight<HTMLDivElement>(isOpen);
    return (
        <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
            <button onClick={() => setIsOpen(!isOpen)}> Open lorem ipsum </button>
            <div className={`lorem-text-wrapper ${isOpen ? "" : "lorem-text-wrapper--hidden"}`} ref={ref}>
                <div className={`lorem-text`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut
                    beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam
                    officiis optio soluta veniam voluptatibus!
                </div>
            </div>
        </section>
    );
};

export default Example;
