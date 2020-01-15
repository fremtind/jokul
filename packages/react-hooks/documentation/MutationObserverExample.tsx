import React, { useState, useRef } from "react";
import { useMutationObserver } from "../src";

const MutationObserverExample = () => {
    const [isOpen, setIsOpen] = useState();
    const [listOfMutations, appendToMutationList] = useState<string[]>([]);
    const mutationTargetRef = useRef(null);
    const listRef = useRef<string[]>();

    listRef.current = listOfMutations;
    const onObservation = (mutationList: MutationRecord[]) => {
        appendToMutationList([...(listRef.current || []), ...mutationList.map((item: any) => item.target.data)]);
    };

    useMutationObserver(mutationTargetRef, onObservation, { characterData: true, subtree: true });
    return (
        <section className="jkl-spacing--top-3 jkl-spacing--bottom-3 jkl-body">
            <button className="jkl-button jkl-button--primary jkl-spacing--right-2" onClick={() => setIsOpen(!isOpen)}>
                Change status
            </button>
            <button className="jkl-button jkl-button--secondary" onClick={() => appendToMutationList([])}>
                Reset list
            </button>
            <p ref={mutationTargetRef} className="jkl-spacing--top-3">
                Current state: {isOpen ? "OPEN" : "CLOSED"}
            </p>
            <p>List of changes in state:</p>
            <ul className="jkl-list">
                {listOfMutations.map((item, idx) => (
                    <li className="jkl-list__item" key={idx}>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MutationObserverExample;
