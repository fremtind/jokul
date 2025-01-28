import React, { ReactNode } from "react";

interface Props {
    name?: string;
    renderIcon: () => ReactNode;
}

export const IconExample: React.FC<Props> = ({ name, renderIcon }) => (
    <div title={name || renderIcon.name}>{renderIcon()}</div>
);
