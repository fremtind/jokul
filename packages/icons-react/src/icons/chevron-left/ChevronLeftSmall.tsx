import React, { FC, SVGAttributes } from "react";

export const ChevronLeftSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3 16L13 15.2736L8.40006 10.5L13 5.72645L12.3 5L7 10.5L12.3 16Z"
            fill="currentColor"
        />
    </svg>
);
