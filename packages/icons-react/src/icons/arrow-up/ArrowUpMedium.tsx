import React, { FC, SVGAttributes } from "react";

export const ArrowUpMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M6.5 10.583l.778.79 3.697-3.889V18.5h1.09V7.505l3.657 3.867.778-.79-5-5.082-5 5.083z"
            fill="currentColor"
        />
    </svg>
);
