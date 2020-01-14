import React, { useState, useRef } from "react";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-core/core.min.css";
import { useAnimatedHeight, useMutationObserver } from "../src";
import "./index.scss";

const Example = () => {
    const [isOpen, setIsOpen] = useState();
    const [listOfMutations, appendToMutationList] = useState<string[]>([]);
    const [ref] = useAnimatedHeight<HTMLDivElement>(isOpen);
    const targetRef = useRef(null);
    const listRef = useRef<string[]>();

    listRef.current = listOfMutations;

    const onObservation = (mutationList: MutationRecord[]) => {
        appendToMutationList([...(listRef.current || []), ...mutationList.map((item: any) => item.target.data)]);
    };

    useMutationObserver(targetRef, onObservation, { characterData: true, subtree: true });

    return (
        <section ref={targetRef} className="jkl-spacing--top-3 jkl-spacing--bottom-3">
            <button onClick={() => setIsOpen(!isOpen)}> Open lorem ipsum </button>
            <div className={`lorem-text-wrapper ${isOpen ? "" : "lorem-text-wrapper--hidden"}`} ref={ref}>
                <div className={`lorem-text`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut
                    beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam
                    officiis optio soluta veniam voluptatibus!
                </div>
            </div>
            <p className="jkl-spacing--top-3">Current state: {isOpen ? "OPEN" : "CLOSED"}</p>
            <p>MutationList:</p>
            <ul>
                {listOfMutations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default Example;
