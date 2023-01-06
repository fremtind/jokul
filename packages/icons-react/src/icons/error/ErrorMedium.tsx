import React, { FC, SVGAttributes } from "react";

export const ErrorMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm3.793-15.207L12 10.586 8.207 6.793 6.793 8.207 10.586 12l-3.793 3.793 1.414 1.414L12 13.414l3.793 3.793 1.414-1.414L13.414 12l3.793-3.793-1.414-1.414z"
            fill="currentColor"
        />
    </svg>
);
