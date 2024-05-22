import React, { FC, SVGAttributes } from "react";

export const TrashCanMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17 3H7v3H3v2h2.13L6 21h12l.87-13H21V6h-4V3Zm-2 3V5H9v1h6ZM7.14 8h9.72l-.73 11H7.87L7.14 8ZM9 17v-7h2v7H9Zm4-7v7h2v-7h-2Z"
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
