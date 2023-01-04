import React, { FC, SVGAttributes } from "react";

export const HamburgerSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 4H17V5.5H3V4Z" fill="currentColor" />
        <path d="M3 9.25H17V10.75H3V9.25Z" fill="currentColor" />
        <path d="M3 14.5H17V16H3V14.5Z" fill="currentColor" />
    </svg>
);
