import React, { FC } from "react";
import { Search, Close } from "@fremtind/jkl-icons-react";

interface Props {
    clearSelection: () => void;
    hasSelectedItem: boolean;
    onClick: () => void;
    inverted?: boolean;
}

const ControllerButton: FC<Props> = ({ hasSelectedItem, clearSelection, onClick, inverted = false, ...rest }) => (
    <button
        {...rest}
        className={`jkl-autosuggest__controller-button ${
            inverted ? "jkl-autosuggest__controller-button--inverted" : ""
        }`}
        aria-label={hasSelectedItem ? "Fjern valg" : "Vis valg"}
        onClick={hasSelectedItem ? clearSelection : onClick}
        type="button"
    >
        {!hasSelectedItem && <Search variant="small" />}
        {hasSelectedItem && <Close variant="small" />}
    </button>
);

export default ControllerButton;
