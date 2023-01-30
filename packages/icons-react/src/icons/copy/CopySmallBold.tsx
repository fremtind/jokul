import React, { FC, SVGAttributes } from "react";

export const CopySmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11.5 16.5h-6v-10H7V5H4v13h9v-3h-1.5v1.5z" fill="currentColor" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5v13h9v-3h3V2H7v3H4zm1.5 1.5v10h6V15H7V6.5H5.5zm3 7h6v-10h-6v10z"
            fill="currentColor"
        />
    </svg>
);
