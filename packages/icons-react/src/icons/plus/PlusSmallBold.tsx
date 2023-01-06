import React, { FC, SVGAttributes } from "react";

export const PlusSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9.25 4h1.5v12h-1.5V4z" fill="currentColor" />
        <path d="M4 9.25h12v1.5H4v-1.5z" fill="currentColor" />
    </svg>
);
