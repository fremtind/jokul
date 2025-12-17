import type React from "react";
import type { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    name?: string;
    renderIcon: () => ReactNode;
}

export const IconExample: React.FC<Props> = ({
    name,
    renderIcon,
    ...restProps
}) => (
    <div title={name || renderIcon.name} {...restProps}>
        {renderIcon()}
    </div>
);
