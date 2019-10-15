import React from "react";
import { IconDelete } from "./Icons/IconDelete";
import { IconEdit } from "./Icons/IconEdit";
import { IconSearch } from "./Icons/IconSearch";
import { IconClear } from "./Icons/IconClear";

interface Props {
    name: string;
    className?: string;
}
export const Icon = ({ name }: Props) => {
    const componentClassName = "jkl-icon".concat(` jkl-icon--${name}`); // " jkl-icon" + name

    return (
        <div className={componentClassName}>
            {name === "delete" && <IconDelete />}
            {name === "edit" && <IconEdit />}
            {name === "search" && <IconSearch />}
            {name === "clear" && <IconClear />}
        </div>
    );
};
