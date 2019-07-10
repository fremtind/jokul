import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const BulletListItem = ({ children }: Props) => <li className="jkl-bullet-list__item">{children}</li>;
