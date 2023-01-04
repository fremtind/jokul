import React, { FC, SVGAttributes } from "react";

export const ChevronRightSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.70003 5L7 5.72645L11.5999 10.5L7 15.2736L7.70003 16L13 10.5L7.70003 5Z"
            fill="currentColor"
        />
    </svg>
);
