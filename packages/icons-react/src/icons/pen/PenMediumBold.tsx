import React, { FC, SVGAttributes } from "react";

export const PenMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m16.4 3.58 4.48 4.5L9.15 19.84l-5.36.83.87-5.33L16.4 3.58Zm.18 5.99 1.48-1.49-1.66-1.66-1.5 1.48 1.67 1.67ZM13.5 9.3l-6.97 7-.32 1.96 1.99-.3 6.96-6.99L13.5 9.3Z"
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
