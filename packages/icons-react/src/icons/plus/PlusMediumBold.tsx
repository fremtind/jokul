import React, { FC, SVGAttributes } from "react";

export const PlusMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11 4h2v16h-2V4z" fill="currentColor" />
        <path d="M4 11h16v2H4v-2z" fill="currentColor" />
    </svg>
);
