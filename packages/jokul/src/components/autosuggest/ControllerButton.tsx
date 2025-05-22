import React, { type FC } from "react";
import { CloseIcon } from "../icon/icons/CloseIcon.js";
import { SearchIcon } from "../icon/icons/SearchIcon.js";
import { IconButton } from "../icon-button/IconButton.js";

interface Props {
    clearSelection: () => void;
    hasSelectedItem: boolean;
    onClick: () => void;
}

const ControllerButton: FC<Props> = ({
    hasSelectedItem,
    clearSelection,
    onClick,
    ...downshiftProps
}) => (
    <IconButton
        {...downshiftProps}
        className="jkl-text-input-action-button"
        aria-label={hasSelectedItem ? "Fjern valg" : "Vis valg"}
        title={hasSelectedItem ? "Fjern valg" : "Vis valg"}
        onClick={hasSelectedItem ? clearSelection : onClick}
    >
        {hasSelectedItem ? <CloseIcon /> : <SearchIcon />}
    </IconButton>
);

export default ControllerButton;
