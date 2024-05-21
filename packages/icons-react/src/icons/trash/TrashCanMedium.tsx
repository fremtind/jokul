import React, { FC, SVGAttributes } from "react";

export const TrashCanMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17 3H7v2H3v1h2.07L6 20h12l.93-14H21V5h-4V3Zm-1 2V4H8v1h8ZM6.07 6h11.86l-.87 13H6.94L6.07 6ZM9.5 17V8h1v9h-1Zm4-9v9h1V8h-1Z"
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
