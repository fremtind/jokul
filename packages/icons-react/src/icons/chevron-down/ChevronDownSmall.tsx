import React, { FC, SVGAttributes } from "react";

export const ChevronDownSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 8.20003L5.22645 7.5L10 12.0999L14.7736 7.5L15.5 8.20003L10 13.5L4.5 8.20003Z"
            fill="currentColor"
        />
    </svg>
);
