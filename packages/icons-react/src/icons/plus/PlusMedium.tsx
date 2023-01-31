import React, { FC, SVGAttributes } from "react";

export const PlusMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 11.5h16v1H4v-1z" fill="currentColor" />
        <path d="M11.5 4h1v16h-1V4z" fill="currentColor" />
    </svg>
);
