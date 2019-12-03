import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const ListItem = ({ children }: Props) => <li className="jkl-list__item">{children}</li>;
