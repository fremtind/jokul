import React, { useState, useRef, FC } from "react";
import { useMutationObserver } from "../src";

const MutationObserverExample: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        <section>
            <button className="jkl-button jkl-button--secondary jkl-spacing-l--left" onClick={() => setIsOpen(!isOpen)}>
                Endre status
            </button>
            <button className="jkl-button jkl-button--tertiary" onClick={() => appendToMutationList([])}>
                Nullstill liste
            </button>
            <p ref={mutationTargetRef} className="jkl-spacing-l--top jkl-body">
                Nåværende status: <strong>{isOpen ? "Åpen" : "Lukket"}</strong>
                <br />
                Liste over endringer:
            </p>
            {listOfMutations.length !== 0 && (
                <ul className="jkl-list jkl-list--unordered jkl-body">
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
