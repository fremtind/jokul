import React, { FC, SVGAttributes } from "react";

export const InfoMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-9-2v7h-2v-7h2zm-1-1.5A1.25 1.25 0 1012 6a1.25 1.25 0 000 2.5z"
            fill="currentColor"
        />
    </svg>
);
