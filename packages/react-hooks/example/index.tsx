import React, { useState } from "react";
import ReactDOM from "react-dom";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-core/core.min.css";
import "./index.scss";
import { useAnimatedHeight } from "../src";

const Buttons = () => {
    const [isOpen, setIsOpen] = useState();
    const [ref] = useAnimatedHeight<HTMLDivElement>(isOpen);
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}> Open lorem ipsum </button>
            <div className={`lorem-text-wrapper ${isOpen ? "" : "lorem-text-wrapper--hidden"}`} ref={ref}>
                <div className={`lorem-text`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut
                    beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam
                    officiis optio soluta veniam voluptatibus!
                </div>
            </div>
        </>
    );
};

const mountNode = document.getElementById("app");
ReactDOM.render(<Buttons />, mountNode);
