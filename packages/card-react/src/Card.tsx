import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const Card = ({ children }: Props) => {
    return <div className="jkl-card">{children}</div>;
};
