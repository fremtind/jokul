import React, { FC, SVGAttributes } from "react";

export const HamburgerSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 4h14v1.5H3V4zM3 9.25h14v1.5H3v-1.5zM3 14.5h14V16H3v-1.5z" fill="currentColor" />
    </svg>
);
