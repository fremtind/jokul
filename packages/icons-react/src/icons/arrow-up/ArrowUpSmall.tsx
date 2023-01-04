import React, { FC, SVGAttributes } from "react";

export const ArrowUpSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M5 8.80062L5.70039 9.46885L9.02724 6.17913V15.5H10.0078V6.19626L13.2996 9.46885L14 8.80062L9.5 4.5L5 8.80062Z"
            fill="currentColor"
        />
    </svg>
);
