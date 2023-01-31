import React, { FC, SVGAttributes } from "react";

export const WarningSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.23 3.083a1.983 1.983 0 013.534 0l5.998 11.93c.705 1.355-.26 2.987-1.767 2.987H4c-1.506 0-2.471-1.632-1.767-2.987L8.23 3.083zM9.248 7h1.499v5h-1.5V7zm.75 8.518c.551 0 .999-.456.999-1.018s-.448-1.018-1-1.018-1 .456-1 1.018.448 1.018 1 1.018z"
            fill="currentColor"
        />
    </svg>
);
