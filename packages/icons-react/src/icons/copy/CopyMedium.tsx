import React, { FC, SVGAttributes } from "react";

export const CopyMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 2h10v16h-3v3H6V5h3V2zm1 1h8v14h-8V3zM9 6H7v14h8v-2H9V6z"
            fill="currentColor"
        />
    </svg>
);
