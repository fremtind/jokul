import React, { FC, SVGAttributes } from "react";

export const HamburgerMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 5h18v2H3V5zM3 11h18v2H3v-2zM3 17h18v2H3v-2z" fill="currentColor" />
    </svg>
);
