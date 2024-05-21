import React, { FC, SVGAttributes } from "react";

export const TrashCanSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.5 3h-7v2H3v1h2.08L6 17h8l.92-11H17V5h-3.5V3Zm-1 2V4h-5v1h5ZM6.09 6h7.82l-.83 10H6.92L6.09 6ZM8 8v6h1V8H8Zm3 6V8h1v6h-1Z"
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
