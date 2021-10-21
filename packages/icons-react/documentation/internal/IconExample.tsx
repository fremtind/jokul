import React, { ReactNode } from "react";

interface Props {
    name?: string;
    renderIcon: () => ReactNode;
    inverted: boolean;
}

export const IconExample: React.FC<Props> = ({ name, renderIcon, inverted }) => (
    <div>
        {renderIcon()}
        <div className={`jkl-micro jkl-spacing-xs--top jkl-color-${inverted ? "hvit" : "svart"}`}>
            {name || renderIcon.name}
        </div>
    </div>
);
