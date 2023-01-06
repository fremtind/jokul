import React, { FC, SVGAttributes } from "react";

export const InfoSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7.25-1v5h-1.5V9h1.5zM10 8a1 1 0 100-2 1 1 0 000 2z"
            fill="currentColor"
        />
    </svg>
);
