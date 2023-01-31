import React, { FC, SVGAttributes } from "react";

export const ErrorSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.793 7.207L8.586 10l-2.793 2.793 1.414 1.414L10 11.414l2.793 2.793 1.414-1.414L11.414 10l2.793-2.793-1.414-1.414L10 8.586 7.207 5.793 5.793 7.207z"
            fill="currentColor"
        />
    </svg>
);
