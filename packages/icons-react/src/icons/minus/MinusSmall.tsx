import React, { FC, SVGAttributes } from "react";

export const MinusSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 9.5h12v1H4v-1z" fill="currentColor" />
    </svg>
);
