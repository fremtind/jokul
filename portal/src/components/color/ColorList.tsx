import { type WithChildren } from "@fremtind/jkl-core";
import React, { FC } from "react";
import "./color-list.scss";

export const ColorList: FC<WithChildren> = ({ children }) => {
    return <div className="jkl-portal-color-list">{children}</div>;
};
