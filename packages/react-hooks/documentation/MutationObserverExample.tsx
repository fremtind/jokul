import React, { useState, useRef, FC } from "react";
import { useMutationObserver } from "../src";

const WillChange: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className="jkl-button jkl-button--secondary jkl-spacing-l--left" onClick={() => setIsOpen(!isOpen)}>
                Endre status
            </button>
            <p className="jkl-spacing-l--top jkl-body">
                Nåværende status: <strong>{isOpen ? "Åpen" : "Lukket"}</strong>
            </p>
        </>
    );
};

const MutationObserverExample: FC = () => {
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
            <div ref={mutationTargetRef}>
                <WillChange />
            </div>
            <p className="jkl-body">Liste over endringer:</p>
            {listOfMutations.length !== 0 && (
                <ul className="jkl-list jkl-list--unordered jkl-body">
                    {listOfMutations.map((item, idx) => (
                        <li className="jkl-list__item" key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            <button className="jkl-button jkl-button--tertiary" onClick={() => appendToMutationList([])}>
                Nullstill liste
            </button>
        </section>
    );
};

export default MutationObserverExample;
