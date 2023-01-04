import React, { FC, SVGAttributes } from "react";

export const PlusMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 11.5H20V12.5H4V11.5Z" fill="currentColor" />
        <path d="M11.5 4H12.5V20H11.5V4Z" fill="currentColor" />
    </svg>
);
