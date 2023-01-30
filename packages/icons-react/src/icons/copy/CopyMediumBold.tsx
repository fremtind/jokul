import React, { FC, SVGAttributes } from "react";

export const CopyMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2h11v16h-4v4H4V6h4V2zm2 2h7v12h-7V4zM8 8H6v12h7v-2H8V8z"
            fill="currentColor"
        />
    </svg>
);
