import React, { FC, SVGAttributes } from "react";

export const ArrowRightMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M13.917 7l-.79.778 3.889 3.697H6v1.09h10.995l-3.867 3.657.79.778L19 12l-5.083-5z"
            fill="currentColor"
        />
    </svg>
);
