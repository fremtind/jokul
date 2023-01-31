import React, { FC, SVGAttributes } from "react";

export const HamburgerSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 4h14v1H3V4zM3 9.5h14v1H3v-1zM3 15h14v1H3v-1z" fill="currentColor" />
    </svg>
);
