import React, { useState, useRef } from "react";
import { useMutationObserver } from "../src";

const MutationObserverExample = () => {
    const [isOpen, setIsOpen] = useState();
    const [listOfMutations, appendToMutationList] = useState<string[]>([]);
    const mutationTargetRef = useRef(null);
    const listRef = useRef<string[]>();

    listRef.current = listOfMutations;
    const onObservation = (mutationList: MutationRecord[]) => {
        appendToMutationList([
            ...(listRef.current || []),
            ...mutationList.map((item) => item.target.textContent || ""),
        ]);
    };

    useMutationObserver(mutationTargetRef, onObservation, { characterData: true, subtree: true });
    return (
        <section className="hooks-example jkl-spacing--bottom-3">
            <button
                className="jkl-button jkl-button--secondary jkl-spacing--right-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                Endre status
            </button>
            <button className="jkl-button jkl-button--tertiary" onClick={() => appendToMutationList([])}>
                Nullstill liste
            </button>
            <p ref={mutationTargetRef} className="jkl-spacing--top-1 hooks-example__text">
                Nåværende status: <strong>{isOpen ? "Åpen" : "Lukket"}</strong>
            </p>
            <p className="hooks-example__text">Liste over endringer:</p>
            {listOfMutations.length !== 0 && (
                <ul className="jkl-list hooks-example__list">
                    {listOfMutations.map((item, idx) => (
                        <li className="jkl-list__item" key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default MutationObserverExample;
