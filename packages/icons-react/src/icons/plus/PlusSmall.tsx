import React, { FC, SVGAttributes } from "react";

export const PlusSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9.5 4h1v12h-1V4z" fill="currentColor" />
        <path d="M4 9.5h12v1H4v-1z" fill="currentColor" />
    </svg>
);
