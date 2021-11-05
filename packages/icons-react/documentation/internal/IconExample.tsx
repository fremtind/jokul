import React, { ReactNode } from "react";

interface Props {
    name?: string;
    renderIcon: () => ReactNode;
}

export const IconExample: React.FC<Props> = ({ name, renderIcon }) => (
    <div>
        {renderIcon()}
        <div className={`jkl-micro jkl-spacing-xs--top`}>{name || renderIcon.name}</div>
    </div>
);
