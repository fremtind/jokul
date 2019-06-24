import React from "react";

export interface Props {
    width?: number;
    negative?: boolean;
    className?: string;
}

export const LogoSymbol = ({ width = 100, negative = false, className = "" }: Props) => (
    <svg
        className={`jkl-logo ${negative ? "jkl-logo--negative" : ""} ${className}`}
        width={width}
        height={width * 0.5}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260.32 140.25"
    >
        <path d="M248.27 138.54l9.48-9.48L130.11 1.42 2.56 128.97l9.85 9.85 59.88-59.88 59.88 59.89 9.49-9.49-59.88-59.89 48.7-48.7 117.79 117.79z" />
    </svg>
);
