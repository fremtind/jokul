import React from "react";
import { GridProps } from "./internal/types";

export const Grid = ({ children, className = "" }: GridProps) => (
    <div className={`jkl-grid__container ${className}`}>{children}</div>
);
