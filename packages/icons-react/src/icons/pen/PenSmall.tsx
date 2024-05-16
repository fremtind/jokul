import React, { FC, SVGAttributes } from "react";

export const PenSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" {...props}>
        <path
            stroke="currentColor"
            d="m8.84 2.45-7.54 7.6-.41 3.1 3.14-.44 7.5-7.55m-2.7-2.7 1.6-1.61 2.68 2.7-1.59 1.61m-2.68-2.7 2.68 2.7"
        />
    </svg>
);
