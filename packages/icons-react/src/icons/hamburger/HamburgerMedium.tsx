import React, { FC, SVGAttributes } from "react";

export const HamburgerMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 6h18v1H3V6zM3 12h18v1H3v-1zM3 18h18v1H3v-1z" fill="currentColor" />
    </svg>
);
