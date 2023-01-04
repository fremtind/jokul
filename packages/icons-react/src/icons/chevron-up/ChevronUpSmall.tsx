import React, { FC, SVGAttributes } from "react";

export const ChevronUpSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 12.8L5.22645 13.5L10 8.90006L14.7736 13.5L15.5 12.8L10 7.5L4.5 12.8Z"
            fill="currentColor"
        />
    </svg>
);
