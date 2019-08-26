import React from "react";

interface ControllerButtonprops {
    clearSelection: () => void;
    hasSelectedItem: boolean;
    isOpen: boolean;
    onClick: () => void;
}

function ControllerButton({ clearSelection, hasSelectedItem, isOpen, onClick, ...rest }: ControllerButtonprops) {
    return (
        <button
            {...rest}
            className="jkl-autosuggest__controller-button"
            aria-label={hasSelectedItem ? "Fjern valg" : "Vis valg"}
            onClick={hasSelectedItem ? clearSelection : onClick}
            type="button"
        >
            {!hasSelectedItem && <Chevron isOpen={isOpen} />}
            {hasSelectedItem && <XIcon />}
        </button>
    );
}

const Chevron = ({ isOpen }: { isOpen: boolean }) => (
    <div
        className={`jkl-autosuggest__chevron
        ${isOpen ? "jkl-autosuggest__chevron--active" : ""}
        `}
    />
);

const XIcon = () => (
    <svg viewBox="0 0 20 20" className="jkl-autosuggest__x-icon">
        <path d="M0,0 L20,20" />
        <path d="M20,0 L0,20" />
    </svg>
);

export default ControllerButton;
