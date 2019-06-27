import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    lead?: boolean;
}

export const Ul = ({ children, lead }: Props) => (
    <ul className={`jkl-bullet-list${lead ? "--lead" : ""}`}>{children}</ul>
);
