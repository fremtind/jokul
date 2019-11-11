import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const BulletListItem = ({ children }: Props) => <li className="jkl-list__item">{children}</li>;
