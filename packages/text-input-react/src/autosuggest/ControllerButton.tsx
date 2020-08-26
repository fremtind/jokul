import React from "react";
import { ArrowVerticalAnimated, Close } from "@fremtind/jkl-icons-react";

interface Props {
    clearSelection: () => void;
    hasSelectedItem: boolean;
    isOpen: boolean;
    onClick: () => void;
    inverted?: boolean;
}

const ControllerButton: React.FC<Props> = ({
    isOpen,
    hasSelectedItem,
    clearSelection,
    onClick,
    inverted = false,
    ...rest
}) => (
    <button
        {...rest}
        className={`jkl-autosuggest__controller-button ${
            inverted ? "jkl-autosuggest__controller-button--inverted" : ""
        }`}
        aria-label={hasSelectedItem ? "Fjern valg" : "Vis valg"}
        onClick={hasSelectedItem ? clearSelection : onClick}
        type="button"
    >
        {!hasSelectedItem && <ArrowVerticalAnimated pointingDown={!isOpen} />}
        {hasSelectedItem && <Close variant="small" />}
    </button>
);

export default ControllerButton;
