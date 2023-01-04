import React, { FC, SVGAttributes } from "react";

export const CheckSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.44025 14.5935L16.2788 5L17 5.70323L6.44025 16L2 11.6703L2.72119 10.9671L6.44025 14.5935Z"
            fill="currentColor"
        />
    </svg>
);
