import React, { FC, SVGAttributes } from "react";

export const SuccessMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22c5.524 0 10.001-4.477 10.001-10s-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10zM6.585 12l1.25-1.25 2.917 2.917 5.417-5.417 1.25 1.25-6.667 6.667L6.584 12z"
            fill="currentColor"
        />
    </svg>
);
