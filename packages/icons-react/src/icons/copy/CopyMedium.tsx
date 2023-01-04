import React, { FC, SVGAttributes } from "react";

export const CopyMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6 5H16V21H6V5Z" style={{ fill: "var(--jkl-icon-color-secondary, transparent)" }} />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 6H7V20H15V6ZM6 5V21H16V5H6Z" fill="currentColor" />
        <path d="M9 2H19V18H9V2Z" style={{ fill: "var(--jkl-icon-color-secondary, transparent)" }} />
        <path fillRule="evenodd" clipRule="evenodd" d="M18 3H10V17H18V3ZM9 2V18H19V2H9Z" fill="currentColor" />
    </svg>
);
