import React, { FC, SVGAttributes } from "react";

export const HamburgerSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 4H17V5H3V4Z" fill="currentColor" />
        <path d="M3 9.5H17V10.5H3V9.5Z" fill="currentColor" />
        <path d="M3 15H17V16H3V15Z" fill="currentColor" />
    </svg>
);
