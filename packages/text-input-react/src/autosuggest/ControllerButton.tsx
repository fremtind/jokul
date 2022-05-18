import { Search, Close } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";

interface Props {
    clearSelection: () => void;
    hasSelectedItem: boolean;
    onClick: () => void;
}

const ControllerButton: FC<Props> = ({ hasSelectedItem, clearSelection, onClick, ...rest }) => (
    <button
        {...rest}
        className="jkl-autosuggest__controller-button"
        aria-label={hasSelectedItem ? "Fjern valg" : "Vis valg"}
        onClick={hasSelectedItem ? clearSelection : onClick}
        type="button"
    >
        {!hasSelectedItem && <Search variant="small" />}
        {hasSelectedItem && <Close variant="small" />}
    </button>
);

export default ControllerButton;
