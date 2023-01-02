import React, { FC, SVGAttributes } from "react";

export const SearchMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.857 15.735a5.878 5.878 0 100-11.755 5.878 5.878 0 000 11.755zm0 .98A6.857 6.857 0 109.857 3a6.857 6.857 0 000 13.715z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.612 13.92L20 19.306l-.693.693-5.388-5.388.693-.693z"
            fill="currentColor"
        />
    </svg>
);
