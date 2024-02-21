import React, { FC, SVGAttributes } from "react";

export const MinusSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 9.25h12v1.5H4v-1.5z" fill="currentColor" />
    </svg>
);
