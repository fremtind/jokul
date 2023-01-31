import React, { FC, SVGAttributes } from "react";

export const SearchSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.354 12.735a4.38 4.38 0 100-8.761 4.38 4.38 0 000 8.761zm0 .974a5.354 5.354 0 100-10.71 5.354 5.354 0 000 10.71z"
            fill="currentColor"
        />
        <path d="M12.106 11.418L16 15.312l-.688.688-3.894-3.894.688-.688z" fill="currentColor" />
    </svg>
);
