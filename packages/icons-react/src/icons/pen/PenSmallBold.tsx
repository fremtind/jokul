import React, { FC, SVGAttributes } from "react";

export const PenSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m13.32 2.94 3.49 3.5-2.78 2.78-6.52 6.53-4.17.65.68-4.14 9.3-9.32Zm.18 4.69 1.19-1.2-1.37-1.37-1.2 1.2 1.38 1.37Zm-2.43-.32-5.65 5.67-.26 1.62 1.64-.25 5.64-5.66-1.37-1.38Z"
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
