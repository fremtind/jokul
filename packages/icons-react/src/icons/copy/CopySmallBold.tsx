import React, { FC, SVGAttributes } from "react";

export const CopySmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 5H13V18H4V5Z" style={{ fill: "var(--jkl-icon-color-secondary, transparent)" }} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5 6.5H5.5V16.5H11.5V6.5ZM4 5V18H13V5H4Z"
            fill="currentColor"
        />
        <path d="M7 2H16V15H7V2Z" style={{ fill: "var(--jkl-icon-color-secondary, transparent)" }} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 3.5H8.5V13.5H14.5V3.5ZM7 2V15H16V2H7Z"
            fill="currentColor"
        />
    </svg>
);
