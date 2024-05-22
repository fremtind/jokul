import React, { FC, SVGAttributes } from "react";

export const PenMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m16.72 3.74 3.53 3.54-12 12-4.43.9.89-4.43 12-12Zm0 1.42-1.8 1.8 2.12 2.11 1.8-1.8-2.12-2.11Zm-.38 4.62-2.12-2.12-8.6 8.59-.52 2.65 2.65-.53 8.59-8.59Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
