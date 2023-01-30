import React, { FC, SVGAttributes } from "react";

export const SearchSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.69 12.83a4.139 4.139 0 100-8.278 4.139 4.139 0 000 8.278zm0 1.552A5.69 5.69 0 108.69 3a5.69 5.69 0 000 11.382z"
            fill="currentColor"
        />
        <path d="M12.861 11.764L17 15.903 15.902 17l-4.138-4.139 1.097-1.097z" fill="currentColor" />
    </svg>
);
