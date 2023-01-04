import React, { FC, SVGAttributes } from "react";

export const HamburgerMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 6H21V7H3V6Z" fill="currentColor" />
        <path d="M3 12H21V13H3V12Z" fill="currentColor" />
        <path d="M3 18H21V19H3V18Z" fill="currentColor" />
    </svg>
);
