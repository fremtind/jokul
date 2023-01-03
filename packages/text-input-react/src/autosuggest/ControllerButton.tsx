import { IconButton } from "@fremtind/jkl-icon-button-react";
import { SearchIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";

interface Props {
    clearSelection: () => void;
    hasSelectedItem: boolean;
    onClick: () => void;
}

const ControllerButton: FC<Props> = ({ hasSelectedItem, clearSelection, onClick, ...downshiftProps }) => (
    <IconButton
        {...downshiftProps}
        className="jkl-text-input-action-button"
        aria-label={hasSelectedItem ? "Fjern valg" : "Vis valg"}
        title={hasSelectedItem ? "Fjern valg" : "Vis valg"}
        onClick={hasSelectedItem ? clearSelection : onClick}
    >
        {hasSelectedItem ? <>TODO</> : <SearchIcon />}
    </IconButton>
);

export default ControllerButton;
