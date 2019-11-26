import React from "react";

interface Props {
    className?: string;
    title?: string;
}

export const LogoSymbol = ({ className = "", title = "Fremtind" }: Props) => (
    <svg
        aria-labelledby="logoSymbolTitle"
        role="img"
        className={`jkl-logo ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260.32 140.25"
    >
        <title id="logoSymbolTitle">{title}</title>
        <path
            stroke="currentColor"
            fill="currentColor"
            d="M248.27 138.54l9.48-9.48L130.11 1.42 2.56 128.97l9.85 9.85 59.88-59.88 59.88 59.89 9.49-9.49-59.88-59.89 48.7-48.7 117.79 117.79z"
        />
    </svg>
);
