import React, { FC, SVGAttributes } from "react";

export const TrashCanSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.75 2.75h-7.5V5H3v1.5h1.63L5.5 17h9l.88-10.5H17V5h-3.25V2.75ZM12.25 5v-.75h-4.5V5h4.5ZM6.13 6.5h7.74l-.75 9H6.88l-.75-9ZM8 8v6h1.5V8H8Zm2.5 6V8H12v6h-1.5Z"
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
