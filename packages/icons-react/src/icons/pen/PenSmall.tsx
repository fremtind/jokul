import React, { FC, SVGAttributes } from "react";

export const PenSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m13.57 3.3 2.89 2.88-2.29 2.3-6.94 6.93-3.62.73.73-3.62 6.94-6.94 2.29-2.29Zm-1.23 2.63 1.48 1.48 1.22-1.23-1.47-1.47-1.23 1.22Zm.77 2.19-1.47-1.48-6.38 6.38-.37 1.84 1.84-.37 6.38-6.37Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h20v20H0z" />
            </clipPath>
        </defs>
    </svg>
);
