import React, { FC, SVGAttributes } from "react";

export const SuccessSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-4.3-7.803l1.066-1.065 2.487 2.486L13.87 7l1.066 1.066-5.684 5.684L5.7 10.197z"
            fill="currentColor"
        />
    </svg>
);
