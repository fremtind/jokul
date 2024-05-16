import React, { FC, SVGAttributes } from "react";

export const PenSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}>
        <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="m8.7 3.62-7.41 7.42-.41 3.08 3.15-.44 7.36-7.37m-2.7-2.7 1.74-1.73 2.7 2.7-1.74 1.73m-2.7-2.7 2.7 2.7"
        />
    </svg>
);
