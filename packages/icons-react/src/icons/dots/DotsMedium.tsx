import React, { FC, SVGAttributes } from "react";

export const DotsMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-14 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
    </svg>
);
