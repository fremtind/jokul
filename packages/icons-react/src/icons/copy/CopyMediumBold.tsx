import React, { FC, SVGAttributes } from "react";

export const CopyMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 6H15V22H4V6Z" style={{ fill: "var(--jkl-icon-color-secondary, transparent)" }} />
        <path fillRule="evenodd" clipRule="evenodd" d="M13 8H6V20H13V8ZM4 6V22H15V6H4Z" fill="currentColor" />
        <path d="M8 2H19V18H8V2Z" style={{ fill: "var(--jkl-icon-color-secondary, transparent)" }} />
        <path fillRule="evenodd" clipRule="evenodd" d="M17 4H10V16H17V4ZM8 2V18H19V2H8Z" fill="currentColor" />
    </svg>
);
