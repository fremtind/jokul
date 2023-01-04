import React, { FC, SVGAttributes } from "react";

export const HamburgerMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 5H21V7H3V5Z" fill="currentColor" />
        <path d="M3 11H21V13H3V11Z" fill="currentColor" />
        <path d="M3 17H21V19H3V17Z" fill="currentColor" />
    </svg>
);
